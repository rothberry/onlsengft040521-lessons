Rails.application.routes.draw do
  resources :instruments, only: [:index, :show, :create]
  # resources :users, only: [:create]
  post "/signup", to: "users#create"

  post "/login", to: "session#login"

  delete "/logout", to: "session#logout"

  get "/me", to: "users#me"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
