# 04

puts "## Integer / Float"
puts Integer(2020)
puts 2020
puts Float(4.2)
puts 4.2

puts "## Calculate"
puts 22 + 1.1
puts 22 - 1.1
puts 22 * 1.1
puts 22 / 1.1

puts "## Array"
p ["Mike", "Harvey", "Rachel", "Donna"]
p Array.new(["Mike", "Harvey", "Rachel", "Donna"])

puts "## Hash"
numbers = Hash.new
numbers[:one] = 1
numbers[:two] = 2
numbers[:three] = 3
p numbers
p numbers[:one]
numbers = {:one => 1, :two => 2, :three => 3, :four => 4}
p numbers
p numbers[:one]
numbers = {"one" => 1, "two" => 2}
p numbers
p numbers[:one] # -> nil
p numbers["one"]
