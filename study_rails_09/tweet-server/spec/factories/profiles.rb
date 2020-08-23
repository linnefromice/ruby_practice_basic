FactoryBot.define do
  factory :profile do
    user { nil }
    description { "MyString" }
    age { "" }
    birthday { "MyString" }
    company { "MyString" }
    location { "MyString" }
  end
end
