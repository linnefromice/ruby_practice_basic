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

# 07, 08
# class / accessor / class method & variables

class User
    attr_reader :name
    attr_accessor :age
    @@latest_name = 'NONE'
    VERSION = 1.0

    def initialize(name, age)
        @name = name
        @age = age
        @@latest_name = name
    end

    def introduce
        puts "NAME: #{@name} / AGE: #{@age}"
    end

    def sayHello
        puts "Hello!!"
    end

    def self.printClassInfo
        puts "[User] VERSION #{VERSION}"
    end

    def self.printLatest
        puts "LATEST USER: #{@@latest_name}"
    end
end

User.printClassInfo();
puts User::VERSION

User.printLatest();
mike = User.new("Mike", 26)
mike.introduce();

User.printLatest();
harvey = User.new("Harvey", 34)
harvey.introduce();

User.printLatest();

puts mike.name
puts mike.age
# mike.name = "rachel" <- only read
mike.age = 18
mike.introduce();