class TodosController < ApplicationController
  def index
    @todos = %w(Reading Writing Designing Coding Testing Building Deploying)
  end
end
