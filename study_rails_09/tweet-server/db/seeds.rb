# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
admin = User.create!({name: "admin", email: "admin@example.com", password: "password"})
moguo = User.create!({name: "モグオ", email: "moguo@mognet.com", password: "password"})
zidane = User.create!({name: "ジタン", email: "zidane@mognet.com", password: "password"})
admin.tweets.create!([
   { sentence: "ユーザー構築ありがとう！" },
   { sentence: "このアプリで日々のつぶやきをたくさんしてください！" },
   { sentence: "僕らはあなたの最初のつぶやきを待っています...是非Tweetしてください！" },
])
moguo.tweets.create!([
   { sentence: "何かご用クポ？" },
   { sentence: "いいかげんにするクポ～" },
   { sentence: "用もないのに呼ぶのは困るクポ！" },
   { sentence: "そろそろやめるクポよ～" },
   { sentence: "いたずらに呼びすぎクポッ、ぷふぇっ！" },
])
zidane.tweets.create!([
    { sentence: "それでは 王女さま 今から、わたくしめが あなた様を誘拐させていただきます" },
    { sentence: "助かったんじゃないさ 生きようとしたんだ いつか帰るところに帰るために" },
    { sentence: "誰かを助けるのに理由がいるかい？" },
    { sentence: "勝負がついてもお互いの命があったんだ。それで充分だろ？" },
])
