# frozen_string_literal: true
require 'rails_helper'

RSpec.describe "User" do
  describe "# about model's field" do
    let!(:user) { create(:user) }
    context 'when with minimum data' do
      it 'should be valid' do
        expect(user).to be_valid
      end
    end
  end
end
