class SongsController < ApplicationController
  def index
    if params[:artist_id]
      artist = Artist.find_by(id: params[:artist_id])
      songs = artist.songs
      render json: artist, include: :songs
    else
      render json: Song.all
    end
  end

  def create
    artist = Artist.find_by(id: params[:artist_id])
    new_song = artist.songs.build(title: params[:title], genre_id: params[:genre_id])
    if new_song.save
      render json: new_song, status: :created
    else
      render json: { error: "Not Created" }, status: :not_created
    end
  end

  # def show
  #   song = Song.find_by(id: params[:id])
  #   render json: song
  # end
end
