module Types
  class MutationType < Types::BaseObject
    field :update_tweet, mutation: Mutations::UpdateTweet
    field :delete_tweet, mutation: Mutations::DeleteTweet
  end
end
