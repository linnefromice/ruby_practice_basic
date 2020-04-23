class PostsController < ApplicationController

    def index
        @posts = Post.all.order(created_at: 'desc')
        @posts.each do |i|
            puts "[INFO] Post = #{i.to_s}"
        end
    end

    def show
        @post = Post.find(params[:id])
        puts "[INFO] Post = #{@post.to_s}"
    end

    def new
    end

    def create
    end
end
