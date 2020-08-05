# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
user = User.create({name: "admin", email: "admin@example.com", password: "password"})
user.tweet.create([
    { sentence: "ユーザー構築ありがとう！" },
    { sentence: "このアプリで日々のつぶやきをたくさんしてください！" },
    { sentence: "僕らはあなたの最初のつぶやきを待っています...是非Tweetしてください！" },
])
