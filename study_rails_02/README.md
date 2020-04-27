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

## Reference

- [Railsガイド - Railsをはじめよう](https://railsguides.jp/getting_started.html)
- [Ruby on Rails 4アプリケーションプログラミング](https://www.amazon.co.jp/dp/B00JZKX6DE)