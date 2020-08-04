# study_rails_09

- Rails X React
  - ログイン含めた簡単なCRUDアプリを作る

## 設計

### 画面一覧

- ログイン画面
- つぶやき一覧画面
- つぶやき新規/更新画面

### モデル設計

TODO

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

- create models

```text
bin/rails g model User name:string email:string password_digest:string
bin/rails g model Tweet sentence:string user:references
# Gemfile の bcrypt をコメントアウト
# bin/rails console
## User.new(name: "admin", email: "admin@example.com", password: "password").save
### CONFIRM -> User.first.authenticate("password")
```

## 参考

- [Rails のモデル（フォーム）でパスワードを暗号化して保存する方法 - Qiita](https://qiita.com/ryosuketter/items/805452b7e6bf9637cb57)
- [ActiveRecordで1対他の関連付けマイグレーションを作成する - Qiita](https://qiita.com/yukihigasi/items/467b68f7f60463202a6e)
- [Rails5 APIモードでつくるかんたんなトークンベース認証 - 大草原](https://dev.m6a.jp/entry/2018/11/14/162259)