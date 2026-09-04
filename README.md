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

テーマの設定例は次のとおりです。

```toml
theme = "veryl"
enableRobotsTXT = true

[pagination]
	pagerSize = 10

[params]
	breadcrumbs = true
	mainSections = ["posts"]
```

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

- 個人ブログ・技術ブログ向けのレスポンシブレイアウト
- トップページ、記事一覧、記事詳細、固定ページ、カテゴリ、タグ、404ページ
- ライト・ダーク・システム設定のテーマ切替（ブラウザに保存）
- RSS、サイトマップ、robots.txtの生成
- 外部ライブラリ不要、Hugo Extended限定機能への依存なし

記事では次のFront Matterを利用できます。

```yaml
---
title: "記事タイトル"
date: 2026-09-01
description: "記事の概要"
categories: ["カテゴリ"]
tags: ["タグ"]
---
```

テーマ切替はヘッダー右側のアイコンメニューから、ライト・ダーク・システムを選択できます。

### 記事セクション

ホームの新着記事とヘッダーの「記事」リンクは、`params.mainSections` に指定したセクションを使用します。既定値は `["posts"]` です。

```toml
[params]
	mainSections = ["articles"]
```

カテゴリ・タグへのリンクは、Hugo標準のtaxonomy設定とパーマリンク設定に従います。

### パンくずリスト

パンくずリストは、`params.breadcrumbs` で表示・非表示を切り替えられます。既定値は `true` です。

```toml
[params]
	breadcrumbs = false
```

## コントリビュート

Issueやプルリクエストを歓迎します。Issueやプルリクエストを作成する際は、期待する動作、変更内容、関連するHugoのバージョンを記載してください。

## ライセンス

Verylは[MIT License](LICENSE)のもとで公開されています。

Copyright (c) 2026 Kaito Takemura
