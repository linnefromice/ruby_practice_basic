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
=begin
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
=end

# 06
# method
=begin
def displayUrl(domain)
    puts "https://#{domain}"
end

def getUrl(domain)
    return "https://#{domain}"
end

displayUrl("www.google.com")
puts getUrl("ja-jp.facebook.com")
=end

# 07
# class

class User
    def initialize(name, age)
        @name = name
        @age = age
    end

    def introduce
        puts "NAME: #{@name} / AGE: #{@age}"
    end

    def sayHello
        puts "Hello!!"
    end
end

mike = User.new("Mike", 26)
mike.introduce();
harvey = User.new("Harvey", 34)
harvey.introduce();