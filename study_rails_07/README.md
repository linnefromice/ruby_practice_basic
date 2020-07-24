# study_rails_07

## Process

### Initialize

- mkdir rails5.2-react-webpacker
- cd rails5.2-react-webpacker
- Gemfileの`rails`をコメントアウトし、バージョン指定
  - `gem "rails", "~> 5.2.0"`
- bundle install --path vendor/bundle
- rails new . -S -T --skip-turbolinks --webpack=react
  - -S ... sprockets関連のSetupスキップ / -T ... Skip test files
  - `bundle exec rails new -h` で、オプション確認
- gibo dump Rails VisualStudioCode >> .gitignore
  - gibo で .gitignore を自動生成する
- Launch
  - bin/rails s
  - bin/webpacker-dev-server

### Add bootstrap

- yarn add bootstrap jquery popper.js
  - bootstrap(4.5) は jquery, popper.js に依存している
    - https://getbootstrap.com/docs/4.5/getting-started/webpack/#importing-javascript
  - popper.js ... 簡単にツールチップ的なものを実装できるJSライブラリ
- 色々追記
  - 参考 ... https://gist.github.com/yalab/cad361056bae02a5f45d1ace7f1d86ef

### Add react

- yarn add webpacker-react
- app/javascript/packs/application.js に下記追記
  - `import 'babel-polyfill'`
  - `import 'stylesheets/application'`
  - `import 'bootstrap'`
  - `import WebpackerReact from 'webpacker-react'`

## Reference

- Tutorial
  - [Rails5.2+React+WebpackerでモダンなWebフロントエンド開発を1時間でキャッチアップしよう - フリーランスのエンジニア道](https://free-engineer.hatenablog.com/entry/2018/04/26/165941)
- rails自体のセットアップ
  - [新規Railsプロジェクト作成時のコマンド - Qiita](https://qiita.com/k_senbei/items/02c4bacd5bb862535d9d)
  - [【Rails】Gemfileのバージョン指定の書き方 - Yohei Isokawa](https://blog.yuhiisk.com/archive/2017/04/24/specify-the-version-of-gemfile.html)
  - [薄いRailsプロジェクトを rails new する - Qiita](https://qiita.com/shinkuFencer/items/e6b4e24a92f7b34e9f24)