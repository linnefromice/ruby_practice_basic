Rails.application.routes.draw do
  resources :books
  get 'hello/index'
  get 'hello/view'
  get 'hello/list'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
