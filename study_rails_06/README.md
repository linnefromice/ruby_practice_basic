# study_record_06

## Process

### Initialize

- mkdir practice_engine
- cd practice_engine
- bundle init
- "Gemfile"の`gem "rails"`のコメントアウトを外す
- bundle install --path vendor/bundle
- bundle exec rails new . -B --skip-test --skip-turbolink
- bundle install --path vendor/bundle
- bundle config set path 'vendor/bundle'
- bundle exec rails webpacker:install
- bundle exec rails s

#### Create Engine

- bundle exec rails plugin new blorgh --mountable
- cd blorgh
- bundle install --path vendor/bundle

#### Create model

- bin/rails generate scaffold article title:string text:text

##### Log
```text
haruyama.arata@mf-1021-mm01 practice_engine % bundle exec rails plugin new blorgh --mountable
      create  
      create  README.md
      create  Rakefile
      create  blorgh.gemspec
      create  MIT-LICENSE
      create  .gitignore
      create  Gemfile
      create  app
      create  app/controllers/blorgh/application_controller.rb
      create  app/helpers/blorgh/application_helper.rb
      create  app/jobs/blorgh/application_job.rb
      create  app/mailers/blorgh/application_mailer.rb
      create  app/models/blorgh/application_record.rb
      create  app/views/layouts/blorgh/application.html.erb
      create  app/assets/images/blorgh
      create  app/assets/images/blorgh/.keep
      create  config/routes.rb
      create  lib/blorgh.rb
      create  lib/tasks/blorgh_tasks.rake
      create  lib/blorgh/version.rb
      create  lib/blorgh/engine.rb
      create  app/assets/config/blorgh_manifest.js
      create  app/assets/stylesheets/blorgh/application.css
      create  bin/rails
      create  test/test_helper.rb
      create  test/blorgh_test.rb
      append  Rakefile
      create  test/integration/navigation_test.rb
  vendor_app  test/dummy
      append  /Users/haruyama.arata/repository/github.com/linnefromice/ruby_practice_basic/study_rails_06/practice_engine/Gemfile
```

- bin/rails db:migrate
- cd test/dummy
- rails server

```text
http://localhost:3000/blorgh/articles
```
↓ add `root to: "articles#index"` line in `config/routes.rb`
```text
http://localhost:3000/blorgh
```

#### Create another model

- cd ../..
- bin/rails generate model Comment article_id:integer text:text
- bin/rails db:migrate
- bin/rails g controller comments

#### Engineをアプリケーションに適用

- アプリケーション側の設定ファイルの追記
  - Gemfile
    - 下記にように、gemとしてengineを追加する
    - `gem 'blorgh', path: 'engines/blorgh'`
  - config/routes.rb
    - `mount Blorgh::Engine, at: "/blog"`
- Migrationファイルのコピー
  - bin/rails blorgh:install:migrations
  - (複数のEngineの場合は、bin/rails railties:install:migrations)
- bin/rails db:migrate SCOPE=blorgh

#### アプリケーションのクラスをEngineで使用する

- bin/rails g model user name:string
- bin/rails db:migrate
- Articleモデルと関連づけをする
- cd blorgh
- bin/rails g migration add_author_id_to_blorgh_articles author_id:integer
- cd ..
- bin/rails blorgh:install:migrations
- bin/rails db:migrate

## エラーシューティング

- Engine側のリソースにアクセスした際に、Sprockets::Rails::Helper::AssetNotPrecompiled が出る
  - https://qiita.com/sanriyochan/items/99d63e8a8691eb29fa4c
  - config/initializers/assets.rb を追加する
    - 本体側のリソースとengineのリソースも記載する
```ruby
Rails.application.config.assets.precompile += %w( application.css blorgh/application.css )
```

## Reference

- [Railsガイド - Rails エンジン入門](https://railsguides.jp/engines.html)