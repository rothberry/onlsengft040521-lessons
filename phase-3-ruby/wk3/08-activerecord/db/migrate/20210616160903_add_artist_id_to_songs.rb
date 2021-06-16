class AddArtistIdToSongs < ActiveRecord::Migration[6.1]
  def change
    # add the artist_id column to the songs table
    # add_column :table, :column_name, :column_type
    add_column :songs, :artist_id, :integer
    # ALTER TABLE
  end
end
