# ? Questions?


=begin

  What is self?
  - scoping keyword, that displays context
  - Where are you?
  
  What are the types of Object Relationships?
  - One to Many
  - Many to Many
  - One to One
  - Has Many Through

  What is SQL?
  - Structured Query Language
  - Databasing
  - Relational Database

  What is an ORM?
  - Object Relational Mapping
  - Using a language to communcate with database

  What is ActiveRecord?
  - is an ORM, the most used Ruby ORM
  - Used to communicate with the database
  - Lots of builtin methods for everything

=end

require 'pry'

def check_email(email)
  !!email.match(/\A[\w.+-]+@\w+\.\w+\z/)
end


# ! Pair Programming

# Create a One to Many relationship from Owners to Pets
# Owner has_many Pets
# Pet belongs_to an Owner

class Owner
  attr_accessor :name, :age
  
  @@all = []
  
  def initialize(name, age)
    @name = name
    @age = age
  end
  
  def save
    @@all << self
  end
  
  def self.all
    @@all
  end

  # * Methods
  def self.create(name, age)
    # makes a new instance
    # saves it to the all array
    # returns the newly created instance
  end
  
  def adopt_pet(pet)
    # owner.adopt_pet(pet) => associates pet to owner
  end
  
  def shop_for_pet(name)
    # owner.shop_for_pet => creates a new pet thats assigned to this owner
  end
  
  def pets
    # owner.pets => shows array of all pets the owner has
  end

end


class Pet
  attr_accessor :name, :breed # might need to add something here...

  @@all = []

  def initialize(name, breed)
    @name = name
    @breed = breed
  end

  def save
    @@all << self
  end

  def self.all
    @@all
  end

  # * Methods
  def self.create(name, breed)
    # makes a new instance
    # saves it to the all array
    # returns the newly created instance
  end

  def get_adopted(owner)
    # pet.get_adopted(owner) => assigns owner to pet
  end

  def find_or_make_owner(name) 
    # pet.find_or_make_owner(name) => assigns owner to pet or creates the owner
  end

end


# Use this area to create your own console testing
puts "Con Solo Testing\n"

# owner1 = Owner.new("phil", 199)
# ownen1.save

p o1 = Owner.create("phil", 100)
p o2 = Owner.create("jill", 400)
p p1 = Pet.create("chauncy", "mutt")
p p2 = Pet.create("cosmo", "bearded collie")

