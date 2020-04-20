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

games = {
    nintendo: "Switch",
    sony: "PS4"
}
puts games[:nintendo]
puts games
games[:nintendo] = "3DS"
puts games