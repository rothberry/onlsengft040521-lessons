=begin
  # * Live Lecture - Object Relationships

  # * DELIVERABLES

  # ! PREVIOUSLY ON:
  - Tons of Object Orientated Ruby

  # ? AND NOW:
  - Defining object relationships
  - Implementing obj relationships

  # ! RELATIONSHIPS
  # * One to One Relationship
  # Person belongs_to Social Security Number
  # Social Security Number belongs_to Person

  # * One to Many Rel
  - Person has_many Possessions; Possessions belongs_to Person
  - Computer has_many Keys; Keys belongs_to Computer
  - Museum has_many Art; Art belongs_to Museum
  - PS5 has_many games; Games belongs_to PS5
  - Person has_many Pets; Pets belongs_to Person
  - Artists has_many Songs; Songs belongs_to Artist
  - Container to MappedComponents Relationship

  # * Many to Many Rel
  - Pets to Family Members
  - Students to Teachers; Central Lecturer Model
  - Customers has_many Products; Products has_many Customers
  - Songs has_many Artists; Artist has_many Songs

  # Inorder to relate a many to many relationship, we need a joiner inbetween
  # ! JOIN TABLE

  # * Has many through
  - Artists has_many Genres through Songs
  - Genres has_many Artists through Songs
  - Songs belongs_to Artist
  - Songs belongs_to Genre


  # ! Diagrams ish

  Person ------ SSN

  PS5 -------- Demon Soul's
     \-------- Spider-man
      \------- God of War
       \------ Ratchet and Clank

  Genre               Artist
  PostRock-\    /-----Beyonce
  Pop-------Song------Tool 
  Edm------/    \-----A perfect Circle

  Join could be a real thing(model, class) Or it could just be an abstract join


=end

require "pry"
require_relative "../../stars.rb"

stars_wipe

# ! One to Many Relationship
# Human has_many Organs
# Organs belongs_to Human

class Human
  attr_accessor :name
  attr_reader :health

  @@all = []

  def initialize(name, health = 100)
    @name = name
    @health = health
    save
  end

  def save
    @@all << self
  end

  def self.all
    @@all
  end

  def add_organ(organ)
    # this organ arg is an Instance of the Organ Class
    # use an Human instance to assign this organ to a Human
    organ.human = self
  end

  def add_organ_by_name(organ_name) # organ_name is a string
    new_organ = Organ.new(organ_name)
    self.add_organ(new_organ)
    return new_organ
  end

  def organs
    Organ.all.select do |org|
      org.human == self
    end
  end
end

class Organ
  attr_accessor :organ_name, :human
  # this                      ^^^ makes the Organ belong to a Human Instance
  # the human variable here, is the ENTIRE Human instance

  @@all = []

  def initialize(organ_name)
    @organ_name = organ_name
    @@all << self
  end

  def self.all
    @@all
  end

  def find_or_create_human(name)
    # we will look through all our Humans, to see if they exist
    # if so, we we will assign tis organ to them
    # if not, we will create life and give them this organ

    found_human = Human.all.find do |h|
      h.name == name
    end

    if found_human
      self.human = found_human
    else
      new_human = Human.new(name)
      self.human = new_human
    end
  end
end

# QUICK && DIRTY CONSOLE TESTING

p mike = Human.new("mike")
p joel = Human.new("joel", 85)
p tyler = Human.new("tyler", 1)

p heart1 = Organ.new("heart❤️")
p spleen = Organ.new("spleen")
p appendix = Organ.new("appendix")

tyler.add_organ(heart1)
mike.add_organ_by_name("brain")
mike.add_organ_by_name("stomach")
joel.add_organ_by_name("liver")
# tyler.add_organ(spleen)
spleen.find_or_create_human("tyler")
appendix.find_or_create_human("phil")

binding.pry
