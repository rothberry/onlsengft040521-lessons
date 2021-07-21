class ArtistsController < ApplicationController
  def index
    artists = Artist.all
    render json: artists
  end

  def show
    artist = Artist.find_by(id: params[:id])
    render json: artist
  end

  # def all_songs
  #   artist = Artist.find_by(id: params[:artist_id])
  #   songs = artist.songs
  #   render json: artist, include: :songs
  # end
end
