def add_two(num)
  # return the num plus 2
  num + 2
end

def add_four(num)
  num + 2
end

class Human
  attr_reader :name

  def initialize(name)
    @name = name
  end
end

# p add_two(2)
p "addtwo",  add_two(2) == 4
p "addfour",  add_four(4) == 8

human = Human.new("phil")
human2 = Human.new("phil")
p human == human2
p human.name == human2.name