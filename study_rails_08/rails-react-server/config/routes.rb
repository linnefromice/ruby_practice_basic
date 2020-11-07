Rails.application.routes.draw do
  post "/graphql", to: "graphql#execute"
  if Rails.env.development?
    # add the url of your end-point to graphql_path.
    mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/graphql"
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resource :tweets
end
