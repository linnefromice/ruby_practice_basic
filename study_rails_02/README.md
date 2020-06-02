# study_rails_02

## app_railbook

### Command

#### Chapter2

- rails new app_railbook
- cd app_railbook
- rails generate controller hello index
- rails generate model book isbn:string title:string price:integer publish:string published:date cd:boolean
- rails db:migrate
- rails db:fixtures:load FIXTURES=books

#### Chapter3

- initialize
  - rails destroy model book
  - rails db:drop
- rails generate scaffold book isbn:string title:string price:integer publish:string published:date cd:boolean
- rails db:migrate

## app_toy

- [Ruby on Rails チュートリアル - 2章](https://railstutorial.jp/chapters/toy_app?version=5.1)

### Command

- rails new app_toy
- cd app_toy
- rails generate scaffold User name:string email:string
- rails db:migrate
- rails generate scaffold Micropost content:text user_id:integer
- rails db:migrate

## app_sample

- [Ruby on Rails チュートリアル - 3章](https://railstutorial.jp/chapters/static_pages?version=5.1#cha-static_pages)

### Command

- rails new app_sample
- cd app_sample
- rails generate controller StaticPages home help
- rails generate integration_test site_layout
- rails generate controller Users new
- rails generate model User name:string email:string
- rails db:migrate
- rails db:migrate RAILS_ENV=test
- rails generate migration add_index_to_users_email
- rails generate integration_test users_signup
- rails generate controller Sessions new
- rails generate integration_test users_login
- rails generate migration add_remember_digest_to_users remember_digest:string
- rails generate migration add_admin_to_users admin:boolean
- rails generate controller AccountActivations
- rails generate migration add_activation_to_users activation_digest:string activated:boolean activated_at:datetime
- rails generate mailer UserMailer account_activation password_reset
- rails generate controller PasswordResets new edit --no-test-framework
- rails generate migration add_reset_to_users reset_digest:string reset_sent_at:datetime
- rails generate integration_test password_resets
- rails generate model Micropost content:text user:references
- rails generate controller Microposts
- rails generate integration_test microposts_interface
- rails generate generate uploader Picture
- rails generate migration add_picture_to_microposts picture:string

User.create(name: "Michael Hartl", email: "mhartl@example.com", password: "foobar", password_confirmation: "foobar")

## Reference

- [Railsガイド - Railsをはじめよう](https://railsguides.jp/getting_started.html)
- [Ruby on Rails 4アプリケーションプログラミング](https://www.amazon.co.jp/dp/B00JZKX6DE)
- [Rubular - a Ruby regular expression editor](https://rubular.com/)

- [Qiita - $ rails db:migrate:reset できない　windows](https://qiita.com/Toshiki23/items/f366504844fd22ad87d9)
- [Hatena Blog - ぞえの技術メモ](http://kt-zoe.hatenablog.com/)