module Types
  class QueryType < Types::BaseObject
    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    # TODO: remove me
    field :test_field, String, null: false,
      description: "An example field added by the generator"
    def test_field
      "Hello World!"
    end

    field :tweet, Types::TweetType, null: true, description: "指定したtweetを取得する"do
      argument :id, Int, required: true, description: "TweetID"
    end
    def tweet(id:)
      Tweet.find(id)
    end

    field :tweets, [Types::TweetType], null: true, description: "tweetを全て取得する"
    def tweets
      Tweet.all
    end
  end
end
