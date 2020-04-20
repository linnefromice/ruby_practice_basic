# 01
# print
=begin
print "hello world";
puts "hello world";
p "hello world";
=end

# 02
# variable
=begin
content = "use variable"
puts content
content = "use variable 2"
puts content

TITLE = "TRAINING MESSAGE"
puts TITLE
TITLE = "TRAINING MESSAGE 2" # NG - display warning
puts TITLE
=end

# 03
# object
=begin
games = {
    nintendo: "Switch",
    sony: "PS4"
}
puts games[:nintendo]
puts games
games[:nintendo] = "3DS"
puts games
=end

# 04
# %
=begin
puts %(hello)
puts %W(one two three four)
=end

# 05
# if

grade = %(C)
if grade == "A"
    puts "Perfect!"
elsif grade == "B"
    puts "Great!"
elsif grade == "C"
    puts "Good!"
else
    puts "Bad!"
end