# Veryl Theme for Hugo

分かりやすく、目的に集中できるWebサイトを構築するためのHugoテーマです。

> **ステータス:** 開発中です。テーマの構成と対応機能は現在策定中です。

## 必要環境

- Hugoのバージョン: 0.133.1以上

## インストール

Hugoサイトの`themes/`ディレクトリに、GitサブモジュールとしてVerylを追加します。

```sh
git submodule add https://github.com/ktdevx/hugo-theme-veryl.git themes/veryl
```

次に、サイトの`hugo.toml`でテーマを指定します。

```toml
theme = "veryl"
```

テーマのAPIが固まり次第、インストール手順と設定項目を更新します。

## 開発

リポジトリをクローンした後、Hugoの開発サーバーを起動します。

```sh
git clone https://github.com/ktdevx/hugo-theme-veryl.git
hugo server -s exampleSite --themesDir ../..
```

`exampleSite/` は、Verylの設計思想と利用イメージを確認するためのデモサイトです。現在はテーマの紹介を1ページにまとめています。

### デモサイトをGitHub Pagesで公開

`main` ブランチへ push すると、GitHub Actions が `exampleSite/` をビルドし、 GitHub Pages へ公開されます。

[Veryl デモサイト](https://ktdevx.github.io/hugo-theme-veryl/)

## 機能

対応機能、対応レイアウト、設定項目、Hugoの対応バージョンは、決まり次第ここに記載します。

## コントリビュート

Issueやプルリクエストを歓迎します。Issueやプルリクエストを作成する際は、期待する動作、変更内容、関連するHugoのバージョンを記載してください。

## ライセンス

Verylは[MIT License](LICENSE)のもとで公開されています。

Copyright (c) 2026 Kaito Takemura
