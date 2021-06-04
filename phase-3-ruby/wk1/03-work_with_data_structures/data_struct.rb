names = %w(chauncy joel brinton tyler mike)

# names.each do |name|
#   puts "Hi, #{name}"
# end

# names.each {|name| puts "Hi, " + name}

def my_each(array)
  i = 0
  while i < array.length 
    yield array[i]
    puts "here"
    i+=1
  end
end

# my_each(names) do |name|
#   puts "Hi, " + name
# end

def my_find(collection)
  i = 0
  while i < collection.size
    return collection[i] if yield(collection[i])
    i += 1
  end
  # p collection[i]
end

my_find(names) do |name|
  name[0] == "j"
end

def my_collect(array) # .map
  i = 0
  new_array = []
  while i < array.length
    new_array << yield(array[i])
    i+=1
  end
  p new_array
end

my_collect(names) do |name|
  name + "s"
end