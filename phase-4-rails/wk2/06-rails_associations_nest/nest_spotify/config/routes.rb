Rails.application.routes.draw do
  # resources :genres
  # get "/artists/:artist_id/songs", to: "artists#all_songs"
  resources :artists do
    resources :songs
  end

  resources :songs

  # Custom routing for songs of a specific artists
  # artist_id to find the artist, then use our AR relationship to render the songs
end
