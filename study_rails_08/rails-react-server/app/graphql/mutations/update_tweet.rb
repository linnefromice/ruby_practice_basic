module Mutations
  class UpdateTweet < BaseMutation
    graphql_name 'UpdateTweet'

    field :tweet, Types::TweetType, null: true
    field :result, Boolean, null: true

    argument :id, ID, required: true
    argument :sentence, String, required: true

    def resolve(id:, sentence:)
      tweet = Tweet.find(id)
      tweet.update_attributes(sentence)
      {
          tweet: tweet,
          result: tweet.errors.blank?
      }
    end
  end
end
