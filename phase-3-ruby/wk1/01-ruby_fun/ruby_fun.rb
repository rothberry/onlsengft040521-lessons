=begin

  Welcome to RUBY!

  # console.log
  puts "hello world"
  p "hello world"
  
  puts "phil mike brinton".split(" ")
  p "phil mike brinton".split(" ")
  
  # Datatypes?? .class
  # strings ("")
  # symbol (string that can't be changed) :symbol
  # boolean
  # hashes (objects) {}
  # Integers(whole) / float (decimals) (Numbers)
  # nil (undefined)

  Methods 
  - def / end

  Implict Return on methods
  which means that if there is no explict `return`, then the return will be whatever the last thing to get returned is

  debugging in Ruby
  - binding.pry
  - exit (ctrl + d) => to move over current pry, and go until the next
  - !!! (ctrl + z) => exits pry completely
  
  Wishful methods
  - .every
  - .filter / select / find_all
  - .sum
  - .sort
  - .first .last
  - .uniq
  - .flatten

  Errors
  - Syntax Errors
  -- Unexpected end of input
  -- ruby doesn't understand
  --- correct typos
  
  -NoMethodError
  -- Undefined *X* for a NilClass
  -- Undefined local variable or method *X*
  --- Check if that name has been defined yet

  - TypeError
  -- 1 + "1" => String can't be coerced into Integer
  -- combining datatypes that don't belong together

=end

require "pry"

def my_method
  x = 1
  y = 2
  z = x + y
  z
  # binding.pry
  "Hi!"
end

# do not need to invoke the method 
# p my_method


# Hashes
my_hash_1 = { name: "Phil"}
# name is a symbol
my_hash_2 = { :name => "Phil"}
my_hash_3 = { "name" => "Phil"}

nested_1 = { cohort: {
  teacher: "phil", 
  data: {
    age: 30
  }
}}

# nested_1[:cohort][:data][:age]
arr = [ 1,5,12,5,6,4,724,77,8,234,8,126]

def condish(x, y)
  # if x greater than y return something
  # else return something else
  if x > y
    "yAYYY"
  elsif x == y # else if => elsif
    "sure?"
  else 
    "nooooo"
  end
end

# no_method_1
p condish(1,1)
# binding.pry