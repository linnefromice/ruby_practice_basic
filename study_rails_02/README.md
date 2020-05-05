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

## Reference

- [Railsガイド - Railsをはじめよう](https://railsguides.jp/getting_started.html)
- [Ruby on Rails 4アプリケーションプログラミング](https://www.amazon.co.jp/dp/B00JZKX6DE)
- [Rubular - a Ruby regular expression editor](https://rubular.com/)
