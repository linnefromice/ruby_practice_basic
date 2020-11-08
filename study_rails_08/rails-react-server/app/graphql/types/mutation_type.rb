module Types
  class MutationType < Types::BaseObject
    field :create_tweet, mutation: Mutations::CreateTweet
    field :update_tweet, mutation: Mutations::UpdateTweet
    field :delete_tweet, mutation: Mutations::DeleteTweet
  end
end
