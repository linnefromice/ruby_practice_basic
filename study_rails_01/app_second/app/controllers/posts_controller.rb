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
        @post = Post.new # create dummy object
    end

    def create
        # debug
        # render plain: params[:post].inspect
        # save
        # @post = Post.new(params[:post])
        @post = Post.new(post_params)
        if @post.save
            # redirect
            redirect_to posts_path
        else 
            # render plain: @post.errors.inspect
            render 'new'
        end
    end

    def edit
        @post = Post.find(params[:id])
        puts "[INFO] Post = #{@post.to_s}"
    end

    private
        def post_params
            params[:post].permit(:title, :body)
        end
end
