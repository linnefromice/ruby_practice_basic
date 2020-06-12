# study_rails_03

## todos-api

- [SCOTCH - Build a RESTful JSON API With Rails 5 - Part One](https://scotch.io/tutorials/build-a-restful-json-api-with-rails-5-part-one)
- [SCOTCH - Build a RESTful JSON API With Rails 5 - Part Two](https://scotch.io/tutorials/build-a-restful-json-api-with-rails-5-part-two)


### command

#### part1

- rails new todos-api --api -T
- cd todos-api
- rails generate rspec:install
- rails g model Todo title:string created_by:string
- rails g model Item name:string done:boolean todo:references
- rails g controller Todos
- rails g controller Items

#### part2

- rails g model User name:string email:string password_digest:string