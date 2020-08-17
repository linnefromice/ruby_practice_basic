require 'rails_helper'

RSpec.describe 'UsersController', type: :request do
  describe 'POST /sign_in' do
    let!(:user) { create(:user) }
    context 'メールアドレス/パスワードが正しい時' do
      before do
        @sign_in_params = { email: user.email, password: user.password }
      end
      it 'リクエストが成功すること' do
        post sign_in_path, params: @sign_in_params
        expect(response.status).to eq 200
      end
    end

    context 'パスワードが正しくない時' do
      before do
        @sign_in_params = { email: user.email, password: user.password + "xyz" }
      end
      it 'リクエストが失敗すること' do
        post sign_in_path, params: @sign_in_params
        expect(response.status).to eq 401
      end
    end

    context '存在しないユーザのメールアドレスを指定したとき' do
      before do
        @sign_in_params = { email: 'error@error.err', password: user.password }
      end
      it 'リクエストが失敗すること' do
        post sign_in_path, params: @sign_in_params
        expect(response.status).to eq 401
      end
    end
  end

  describe 'POST /sign_up' do
    # TODO
  end

  describe 'GET /users' do
    it 'リクエストが成功すること' do
      get users_path
      expect(response.status).to eq 200
    end
  end
end
