=begin
  # * Live Lecture - Object Self and Class Variables/Methods

  # ! PREVIOUSLY ON:
  - Understand the macros for setters(writers) & getters(readers) & both together(accessor), and which macro to use
  - Understand the how the initialization of a class with the .new 
  - Understand how to create custom instance methods and how to call the method outside of the class

  # ? AND NOW:
  - Learning about scope of methods
  - Introduction to the "self" keyword
  - Implict vs Explict declarations
  - Learn about class methods and variables
  - Learn about Private methods


  # ! Self
  Self ~= this
  self => keyword that gives a context to the scope

  Class varables => @@class_var && self.class.class_var Beer.class_method

  Where should we initalize a class variable

  Class var get initialized when the class in the initialized
  Free standing inside of the class

=end

require "pry"
require_relative "../../stars.rb"

stars_wipe

def show_self
  puts "Outside self is #{self}, and the class is #{self.class}"
end

class Beer
  attr_accessor :name, :size, :type
  attr_reader :current_volume

  puts "Inside Beer self is #{self}, and the class is #{self.class}"
  # self is the entire Beer class
  # @@num_beers = 0
  @@all_beers = [] # self.class.all_beers

  def initialize(name, size, type = "draft")
    self.name = name # @name
    self.size = size
    self.type = type
    @current_volume = size

    @@all_beers << self
    # self => is the newly created beer instance
    # puts "Inside init self is #{self.name}, and the class is #{self.class}"
    # p @@all_beers.count

    # binding.pry
  end

  # ? CLASS METHODS
  def self.all # self => Beer
    # Class getter method
    @@all_beers # self.all_beers
  end

  def self.all=(args)
    @@all_beers = args
  end

  def self.num_beers
    puts "There are #{@@all_beers.count} beers in the brewery"
  end

  def self.show_class_self
    puts "Inside class self is #{self}, and the class is #{self.class}"
  end

  def self.show_beers
    self.all.each do |beer|
      puts "#{beer.name}, #{beer.size}"
    end
  end

  def self.clear_bar
    @@all_beers.clear
    # @@all_beers = []
  end

  def self.round_of_beers(num = 4)
    # loop num times and create that many new beers
    num.times do
      self.new("keg beer", 12) #.show_instance_self....
      # Beer.new("keg beer", 12)
    end
  end

  # ? INSTANCE METHODS
  def show_instance_self
    puts "Inside instance self is #{self}, and the class is #{self.class}"

    # self is the instance of the class
  end

  def drink(sips = 1) #default argument
    # @@all_beers = 7
    if @current_volume >= sips
      @current_volume = @current_volume - sips
      puts "There is #{@current_volume}oz left!"
    else
      puts "Another!"
    end
  end

  def refill(amount)
    if @current_volume + amount > @size
      @current_volume = @size
    else
      @current_volume += amount
    end
    puts "Now you've got #{@current_volume} left!"
  end

  def non_secret_drink
    secret_drink
  end

  private

  @@secret_var = "jhagsfkd"

  def secret_drink
    puts "shhhhhhh drinking"
  end

  def secret_var
    @@secret_var
  end
end

puts "Console Testing"
pbr = Beer.new("pbr", 12, "draft")
miller = Beer.new("miller", 24, "bottle")
oberon = Beer.new("oberon", 16, "can")

# pbr.show_instance_self
# oberon.show_instance_self

binding.pry
