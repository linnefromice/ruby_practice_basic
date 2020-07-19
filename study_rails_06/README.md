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