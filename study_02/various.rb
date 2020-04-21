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
