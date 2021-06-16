class CreateSongs < ActiveRecord::Migration[6.1]
  def change
    create_table :songs do |t|
      t.string :title
      # t.integer :artist_id

      t.timestamps
    end
  end

  # def up

  # def down
end
