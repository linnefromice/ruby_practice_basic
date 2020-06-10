# study_rails_03

## todos-api

- [SCOTCH - Build a RESTful JSON API With Rails 5 - Part One](https://scotch.io/tutorials/build-a-restful-json-api-with-rails-5-part-one)

### command

- rails new todos-api --api -T
- cd todos-api
- rails generate rspec:install
- rails g model Todo title:string created_by:string
- rails g model Item name:string done:boolean todo:references