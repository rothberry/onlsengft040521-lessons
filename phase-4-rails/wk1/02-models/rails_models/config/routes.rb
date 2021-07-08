Rails.application.routes.draw do

  # Where we open up our routes

  # resources :songs. :artists, :genres
  resources :artists, only: [:index, :create]

  # get "show", action: :profile, controller: "artists"
  get "show", to: "artists#profile"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
