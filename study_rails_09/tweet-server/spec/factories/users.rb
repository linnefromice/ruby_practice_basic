# frozen_string_literal: true

FactoryBot.define do
  factory :user do
    name { "administrator" }
    sequence(:email) { |n| "administrator_#{n}@example.com" }
    password { "password" }

    trait :with_urls do
      user_urls { [ :portfolio_url, :facebook_url, :instagram_url ] }
    end
  end
end
