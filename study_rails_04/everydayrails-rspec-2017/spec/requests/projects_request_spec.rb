require 'rails_helper'

RSpec.describe "Projects", type: :request do
  describe "#index" do
    before do
      @user = FactoryBot.create(:user)
    end

    # 正常にレスポンスを返すこと
    it "responds successfully" do
      sign_in @user
      get projects_path
      expect(response).to be_successful
    end

    # 200レスポンスを返すこと
    it "returns a 200 response" do
      sign_in @user
      get projects_path
      expect(response).to have_http_status "200"
    end
  end
end
