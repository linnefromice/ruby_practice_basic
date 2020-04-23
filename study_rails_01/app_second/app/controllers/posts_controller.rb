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
        # debug
        # render plain: params[:post].inspect
        # save
        # @post = Post.new(params[:post])
        @post = Post.new(post_params)
        @post.save
        # redirect
        redirect_to posts_path
    end

    private
        def post_params
            params[:post].permit(:title, :body)
        end
end
