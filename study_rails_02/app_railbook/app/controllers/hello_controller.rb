class HelloController < ApplicationController
  def index
    @msg = 'Hello, World!'
  end

  def view
    @msg = "Hello, hello/view"
  end

  def list
    @books = Book.all
  end
end
