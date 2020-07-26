# study_rails_08

## Rails X React

- [Ruby on Rails+ReactでCRUDを実装してみた - Qiita](https://qiita.com/yoshimo123/items/9aa8dae1d40d523d7e5d)
  - server ... rails-react-server
  - client ... rails-react-client

### Reference

- [Rails による API 専用アプリケーション - Railsガイド](https://railsguides.jp/api_app.html)
- [Rails「ユーザーのモデルを作成する」 - Qiita](https://qiita.com/macotok/items/a17a4b0d22db4e885678)

### rails-react-server

#### Initialize

```text
mkdir rails-react-server
cd rails-react-server
bundle init
# Gemfile の rails をコメントアウトして、バージョン指定
## gem "rails", "~> 6.0.0"
bundle install --path vendor/bundle
bundle exec rails new . --api
gibo dump Rails JetBrains >> .gitignore
```

#### Create model/controller

```text
bin/rails g model Tweet sentence:string user_name:string
bin/rails db:migrate:reset
bin/rails db:seed
bin/rails g controller tweets
```

- `app/controllers/tweets_controller`でメソッド実装
  - "index"ではなく"show"を実装
- 初期データ作成
  - `db/seeds.rb`