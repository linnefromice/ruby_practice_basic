class PostsController < ApplicationController

    def index
        @posts = Post.all.order(created_at: 'desc')
        @posts.each do |i|
            puts "[INFO] Post = #{i.to_s}"
        end
    end
end
