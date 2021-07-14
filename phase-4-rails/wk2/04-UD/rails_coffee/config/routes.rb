Rails.application.routes.draw do
  # resources :coffees, only: [:index, :show, :create]
  # resources :coffees, except: [:update, :destroy]
  # get '/coffees', to: "coffees#index"
  # get '/coffees/:id', to: "coffees#show"
  # post '/coffees', to: "coffees#create"
  # resources :coffees, :cup, :spoon
  # ...

  resources :coffees
  # Like route
  patch "/coffees/:id/like", to: "coffees#add_likes"

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
