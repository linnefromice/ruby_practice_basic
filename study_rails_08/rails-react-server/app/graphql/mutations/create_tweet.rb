module Mutations
  class CreateTweet < BaseMutation
    graphql_name 'CreateTweet'

    field :tweet, Types::TweetType, null: true
    field :result, Boolean, null: true

    argument :sentence, String, required: true
    argument :user_name, String, required: true

    def resolve(sentence:, user_name:)
      tweet = Tweet.create!(sentence: sentence, user_name: user_name)
      {
          tweet: tweet,
          result: tweet.errors.blank?
      }
    end
  end
end
