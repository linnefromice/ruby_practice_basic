module Types
  class MutationType < Types::BaseObject
    field :delete_tweet, mutation: Mutations::DeleteTweet
  end
end
