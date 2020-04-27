class HelloController < ApplicationController
  def index
    @msg = 'Hello, World!'
  end

  def view
    @msg = "Hello, hello/view"
  end
end
