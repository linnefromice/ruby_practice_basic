module Mutations
  class DeleteTweet < BaseMutation
    graphql_name 'DeleteTweet'

    field :tweet, Types::TweetType, null: true
    field :result, Boolean, null: true

    argument :id, ID, required: true

    def resolve(id:)
      tweet = Tweet.find(id)
      tweet.destroy!
      {
          tweet: tweet,
          result: tweet.errors.blank?
      }
    end
  end
end
