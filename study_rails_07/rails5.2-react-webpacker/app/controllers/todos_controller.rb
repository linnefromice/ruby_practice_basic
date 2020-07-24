class TodosController < ApplicationController
  def index
    @todos = %w(Reading Writing Coding Testing Building Deploying)
  end
end
