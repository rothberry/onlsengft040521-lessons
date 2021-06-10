=begin
  # ! Object Oriented Programming (Ruby)

  # * Deliverables

  - Understand the how the initialization of a class with the .new 
  - Understand the macros for setters(writers) & getters(readers) & both together(accessor), and which macro to use
  - Understand how to create custom instance methods and how to call the method outside of the class

=end

require "pry"
require_relative '../../stars.rb'

class Beer
  attr_reader :size, :type, :current_volume
  attr_writer :flavor
  attr_accessor :name

  # Beer.new(args) name, size, type
  def initialize(name, size, type)
    # how to  create instance variables from these args
    @name = name
    @size = size
    @type = type

    # default values
    @flavor = "It's aight"
    @current_volume = @size

    puts "new!"
  end

  # const [name, setName] = useState("pbr")
  # Getter => gets the data for the instance/class variables
  # attr_reader :name
  # def name
  #   # puts "the beer is #{@name}"
  #   @name
  # end

  # def another_method
  #   puts name
  # end

  # Setter => sets the value for a variable
  # def name=(name)
  #   @name = name
  # end

  # ? Instance Methods!
  def drink
    # drink our beer, 4 oz at a time
    if @current_volume >= 4
      @current_volume = @current_volume - 4
      puts "There is #{@current_volume}oz left!"
    else
      puts "Another!"
    end
  end

  def refill(amount) # refill(amount, current_vol, size, )
    # increase the @current_vol by the amount, without going over the size
    if @current_volume + amount > @size
      @current_volume = @size
    else
      @current_volume += amount
    end
    puts "That'll be $40"
  end
end

stars

# Create a new Beer with some initial props
p pbr = Beer.new("pbr", 12, "draft")
pbr_obj = {
  name: "pbr",
  size: 12,
  type: "draft",
  flavor: "Aight",
  current_volume: 12
}
def drink_outside(beer)
  # drink beer here
end

p miller = Beer.new("miller", 24, "bottle")

binding.pry
