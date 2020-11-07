module Types
  class TweetType < Types::BaseObject
    description "A tweet"
    field :id, ID, null: false
    field :sentence, String, null: true
    field :user_name, String, null: true
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
  end
end
