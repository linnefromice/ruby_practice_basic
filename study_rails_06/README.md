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

### Create Engine

- bundle exec rails plugin new blorgh --mountable
- cd blorgh
- bundle install --path vendor/bundle
- bin/rails generate scaffold article title:string text:text
- bin/rails db:migrate
- cd test/dummy
- rails server

```text
http://localhost:3000/blorgh/articles
```

#### Log

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

## Reference

- [Railsガイド - Rails エンジン入門](https://railsguides.jp/engines.html)