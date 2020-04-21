# 03

def show(a = "Hello, Default!")
    puts a
end

def hello
    puts "HELLO!!"
end

def sum(a, b)
    puts a+b
end

def minus(a, b)
    puts a-b
end

lambda_method = lambda do |arg|
    puts "LAMBDA: #{arg}"
end

show("Hello, World!")
show "Hello, Ruby!"
show
hello
sum(2000, 20)
minus 2000, 20
lambda_method.call("Hello, Lambda!")