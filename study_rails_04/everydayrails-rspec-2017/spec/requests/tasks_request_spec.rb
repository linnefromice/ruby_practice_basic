require 'rails_helper'

RSpec.describe "Tasks", type: :request do
  before do
    @user = FactoryBot.create(:user)
    @project = FactoryBot.create(:project, owner: @user)
    @task = @project.tasks.create!(name: "Test Task")
  end

=begin
  describe "#show" do
    # JSON形式でレスポンスを返すこと
    it "responds with JSON formatted output" do
      sign_in @user
      # get :show, format: :json, params: { project_id: @project.id, id: @task.id }
      get "/projects/#{@project.id}/tasks/#{@task.id}", params: { project_id: @project.id, id: @task.id }
      expect(response.content_type).to eq "application/json"
    end
  end
=end
end
