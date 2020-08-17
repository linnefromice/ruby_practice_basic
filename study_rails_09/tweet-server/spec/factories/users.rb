# frozen_string_literal: true

FactoryBot.define do
  factory :user do
    name { "administrator" }
    sequence(:email) { |n| "administrator_#{n}@example.com" }
    password { "password" }
  end
end
