# study_rails_09

- Rails X React
  - ログイン含めた簡単なCRUDアプリを作る

## 設計

### 画面一覧

- ログイン画面
- つぶやき一覧画面
- つぶやき新規/更新画面

### モデル設計


### 技術選定

TODO

## 構築メモ

### tweet-server

- initilizing

```text
mkdir tweet-server
cd tweet-server
bundle init
# Gemfile の rails をコメントアウトして、バージョン指定
## gem "rails", "~> 6.0.0"
bundle install --path vendor/bundle
bundle exec rails new . --api
gibo dump Rails JetBrains >> .gitignore
```

## 参考

- [Rails のモデル（フォーム）でパスワードを暗号化して保存する方法 - Qiita](https://qiita.com/ryosuketter/items/805452b7e6bf9637cb57)
