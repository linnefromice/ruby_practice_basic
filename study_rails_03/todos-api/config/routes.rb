Rails.application.routes.draw do
  resources :todos do
    resources :item
  end
end
