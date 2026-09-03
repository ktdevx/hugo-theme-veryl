# Veryl Theme for Hugo

分かりやすく、目的に集中できるWebサイトを構築するためのHugoテーマです。

> **ステータス:** 開発中です。テーマの構成と対応機能は現在策定中です。

## 必要環境

- Hugoのバージョン: 初期実装後に確定予定

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

リポジトリをクローンした後、テーマを使用するテストサイトからHugoの開発サーバーを起動します。

```sh
git clone https://github.com/ktdevx/hugo-theme-veryl.git
cd your-hugo-site
hugo server --themesDir ../
```

テーマ本体の実装とあわせて、実行可能なサンプルサイトを追加する予定です。

## 機能

対応機能、対応レイアウト、設定項目、Hugoの対応バージョンは、決まり次第ここに記載します。

## コントリビュート

Issueやプルリクエストを歓迎します。Issueやプルリクエストを作成する際は、期待する動作、変更内容、関連するHugoのバージョンを記載してください。

## ライセンス

Verylは[MIT License](LICENSE)のもとで公開されています。

Copyright (c) 2026 Kaito Takemura
