# https://scotch.io/tutorials/understanding-ruby-closures
puts "# Block"
arr = ["one", "two", "three", "four", "five"]
arr.each do |element|
    p element
end
arr.each_index do | index |
    puts "The element at #{index} is #{arr[index]}"
end

hash = { a:1, b:2, c:3, d: :d, e: :e, f: :f }
puts hash
hash = hash.delete_if do | key, value |
    key == value
end
puts hash

class Post
    attr_accessor :title, :content, :author, :publish_date

    def initialize(title, content, author, publish_date)
        @title = title
        @content = content
        @author = author
        @publish_date = publish_date
    end

    def block_inspect(&block)
        self.instance_variables.each do |instance_variable|
            stringified_instance_varible_name = instance_variable.to_s.sub('@', '')
            # yield(stringified_instance_varible_name, self.instance_variable_get(instance_variable)) if block_given?
            block.call(stringified_instance_varible_name, self.instance_variable_get(instance_variable)) if block_given?
        end
    end
end

post = Post.new("Title", "Content", "Author", "Publish Date")
post.block_inspect do | attribute, value |
    puts "#{attribute} = #{value}"
end
post.block_inspect

puts "# Procedure"

def show_class(&block)
    puts "The block class is #{block.class}" if block_given?
    yield if block_given?
end
show_class do
    puts "H1! from inside the block"
end

class PostTwo
    attr_accessor :title, :content, :author, :publish_date

    def initialize(title, content, author, publish_date)
        @title = title
        @content = content
        @author = author
        @publish_date = publish_date
    end

    def block_inspect(&block)
        self.instance_variables.each do |instance_variable|
            stringified_instance_varible_name = instance_variable.to_s.sub('@', '')
            # yield(stringified_instance_varible_name, self.instance_variable_get(instance_variable)) if block_given?
            block.call(stringified_instance_varible_name, self.instance_variable_get(instance_variable)) if block_given?
        end
    end

    def proc_inspect(block)
        self.instance_variables.each do |instance_variable|
            stringified_instance_varible_name = instance_variable.to_s.sub('@', '')
            block.call(stringified_instance_varible_name, self.instance_variable_get(instance_variable))
        end
    end
end

proc_inspect = Proc.new do |attribute, value|
    puts "#{attribute} = #{value}"
end
post_two = PostTwo.new("Title", "Content", "Author", "Publish Date")
post_two.proc_inspect(proc_inspect)