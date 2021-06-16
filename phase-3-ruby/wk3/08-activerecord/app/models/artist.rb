class Artist < ActiveRecord::Base
  has_many :songs
  # has_many :songs, class_name "Song", foreign_key: "artist_id"

  # bultin AR methods
  # . => class, # => instance
  # .new makes a new instance
  # .create makes a new instance, and SAVES it to the db
  # #save
  # .find(id)
  # .find_by(hash)

  # @@all = []
  # def self.all
  #   @@all
  #   DB.execute("select * from artists;")
  # end

  # def create(hash)
  #   @prop1 = hash[prop1]....
  #   "INSERT INTO artists VALUES (hash[prop1]...)"
  # end

  def display_name_cooly
    puts "WOOOOOW IT'S #{self.name}"
  end

  # def songs
  #   # select all the songs with our artist id
  #   # raw ruby No SQL
  #   # Song.all.select do |song|
  #   #   song.artist_id == self.id
  #   # end

  #   # AR using SQL
  #   Song.where(artist_id: self.id)
    # DB.execute("SELECT * FROM songs WHERE artist_id = ?", [["id", 1]])

  # end

end