# if

module MODULE_IF
    def self.main
        num = 15
        if num >= 10
            puts "Over 10"
        end
        num = 5
        if num > 0 && num < 10
            puts "0 < number < 10"
        end
    end
end

MODULE_IF.main

# case

module MODULE_CASE
    def self.main
        num = 3
        case num
            when 0
                puts "num is ZERO"
            when 1
                puts "num is ONE"
            when 2
                puts "num is TWO"
            when 3
                puts "num is THREE"
            when 4
                puts "num is FOUR"
            else
                puts "num is #{num}"
        end
    end
end

MODULE_CASE.main