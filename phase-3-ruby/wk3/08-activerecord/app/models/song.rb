class Song < ActiveRecord::Base
  belongs_to :artist

  # def artist
  #   # Ruby No SQL
  #   # Artist.all.select do |artist|
  #   #   artist.id  == self.artist_id
  #   # end.first

  #   # In ActiveRecordLand
  #   Artist.find_by(id: self.artist_id)
  # end

  # def find_artists_with_song_worth
  #   "SELECT artists.name, SUM(songs.worth)
  #   FROM artists
  #   JOIN songs
  #   ON artists.id = songs.artist_id
  #   GROUP BY artists.name
  #   ORDER BY artists.name ASC
  #   LIMIT = 15"
  # end

end