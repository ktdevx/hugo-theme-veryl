(() => {
  const root = document.documentElement;
  const choices = document.querySelectorAll('[data-theme-choice]');
  const media = window.matchMedia('(prefers-color-scheme: dark)');
  let stackingOrder = 0;

  const bringToFront = (element) => {
    stackingOrder += 1;
    element.style.zIndex = String(stackingOrder);
  };

  const resetStacking = (element) => {
    element.style.zIndex = '';
  };

  const closeDetails = (detailsElement) => {
    if (detailsElement && detailsElement.open) {
      detailsElement.removeAttribute('open');
    }
  };

  const closeOtherMenus = (exceptElement) => {
    document.querySelectorAll('details.theme-menu, details.language-menu').forEach((detailsElement) => {
      if (detailsElement !== exceptElement) {
        closeDetails(detailsElement);
      }
    });
  };

  const applyTheme = (theme) => {
    root.dataset.theme = theme;
    choices.forEach((choice) => {
      choice.setAttribute('aria-pressed', String(choice.dataset.themeChoice === theme));
    });
  };

  choices.forEach((choice) => {
    choice.addEventListener('click', () => {
      const theme = choice.dataset.themeChoice;
      localStorage.setItem('veryl-theme', theme);
      applyTheme(theme);
      choice.closest('details').removeAttribute('open');
    });
  });

  media.addEventListener('change', () => {
    if ((localStorage.getItem('veryl-theme') || 'system') === 'system') applyTheme('system');
  });

  const navToggle = document.querySelector('[data-nav-toggle]');
  const navPanel = document.querySelector('[data-nav-panel]');
  const mobileThemeMenu = document.querySelector('.theme-menu--mobile');
  const mobileLanguageMenu = document.querySelector('.language-menu--mobile');
  const mobileMedia = window.matchMedia('(max-width: 600px)');

  if (navToggle && navPanel) {
    const setNavOpen = (isOpen) => {
      navToggle.setAttribute('aria-expanded', String(isOpen));
      navToggle.setAttribute('aria-label', isOpen ? 'メニューを閉じる' : 'メニューを開く');
      navToggle.setAttribute('title', isOpen ? 'メニューを閉じる' : 'メニューを開く');
      navPanel.dataset.menuOpen = String(isOpen);
      navPanel.setAttribute('aria-hidden', String(!isOpen));

      if (isOpen) bringToFront(navPanel);
      else resetStacking(navPanel);
    };

    const closeNav = () => {
      setNavOpen(false);
    };

    const closeMobileThemeMenu = () => {
      closeDetails(mobileThemeMenu);
    };

    const closeMobileLanguageMenu = () => {
      closeDetails(mobileLanguageMenu);
    };

    navToggle.addEventListener('click', () => {
      const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
      if (!isOpen) closeOtherMenus();
      setNavOpen(!isOpen);
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        closeNav();
        closeOtherMenus();
      }
    });

    navPanel.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeNav));
    const syncNav = () => {
      if (mobileMedia.matches) {
        closeNav();
        return;
      }

      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.setAttribute('aria-label', 'メニューを開く');
      navToggle.setAttribute('title', 'メニューを開く');
      navPanel.dataset.menuOpen = 'true';
      navPanel.setAttribute('aria-hidden', 'false');
    };
    mobileMedia.addEventListener('change', syncNav);
    syncNav();
  }

  document.querySelectorAll('details.theme-menu, details.language-menu').forEach((detailsElement) => {
    detailsElement.addEventListener('toggle', () => {
      if (!detailsElement.open) {
        resetStacking(detailsElement.querySelector('.theme-options, .language-options'));
        return;
      }

      if (navToggle && navToggle.getAttribute('aria-expanded') === 'true') {
        navToggle.click();
      }

      closeOtherMenus(detailsElement);

      const menuPanel = detailsElement.querySelector('.theme-options, .language-options');
      if (menuPanel) {
        bringToFront(menuPanel);
      }
    });
  });

  applyTheme(localStorage.getItem('veryl-theme') || 'system');
})();