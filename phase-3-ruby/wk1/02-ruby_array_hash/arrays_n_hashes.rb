=begin

  Arrays and Hashes

=end

require "pry"

# array_slow = ["phil", "mike", "tyler", "joel"]
# array_split = "phil mike tyler joel".split(" ")
arr = %w(phil mike tyler joel)

arr[0]

# * Each loop
# returns the array that was given
# in JS it's defined
each_names = arr.each do |element|
  # do something
  # string interpolation in JS => `${}`
  "Hi, my name is #{element}"
end

# * Map
mapped_names = arr.map.with_index(1) do |element, idx|
  "#{idx}: Hi, my name is #{element}"  
end
# arr.map(element => {
#   return `Hi, my name is ${element}`
# })
# One-Liner
mapped_names_1 = arr.collect { |element| "#{element} on one line!"}
# arr.map(element => `#{element} on one line!`)

# * Find
found_names = arr.find do |element|
  # need to return a boolean
  element[1] == "i"
end
# Alt
# filter end.first

# * Filter
filter_names = arr.select do |element|
  element.split("").count == 4
end

# In Javascript
# arr.map((element, index) => {
#   khasgfksaj
# })

# With index
# add .with_index(starting_index) to get access to the index enumberablein the pipes |element, index|

# arr.slice(0, 3) == arr[0..2] # true!
# [range] is inclusive

# (!) => makes any method destructive

# push adds to end of the array 
# push << element
# pop removes the last element in array
# unshift add to front in array
# shift remove from the front in array

# * Useful array methods
# flatten   => flattens an array of arrays into one level of array
# uniq      => returns all unique values in array
# sort      => sorts array
# first/last
# sum


# p each_names
# puts mapped_names
# p mapped_names_1
# p found_names
# p filter_names


# ? Hashes

people = {
  phil: "instrucorino",
  joel: "trail blazer",
  travis: "swashbuckler",
  "travis" => "Not a swashbuckler",
  brinton: [
    {
      pet: "cat"
    }
  ]
}
people[:travis] != people["travis"]
people.keys
people.values

def create_record_hash(games)
  # Your Code Here
  record_hash = {}
  games.each do |game|
    if !!record_hash[game]
    # if record_hash.keys.include?(game)
    # if record_hash.has_key?(game)
      record_hash[game] += 1
    else
      record_hash[game] = 1
    end
  end
  record_hash
end

# { w: wins, l: losses, t: ties }

games = "wwwlllwlwtlwlwltlw".split("")  # ['w', 'w', 'l', 't'... ]

puts "\nConsole Testing!\n"
p games
hash = create_record_hash(games)
puts hash

hash.each do |key, value|
  puts "#{key}: #{value}"
end


# binding.pry