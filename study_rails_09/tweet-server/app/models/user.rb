class User < ApplicationRecord
  VALID_EMAIL_REGAX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i

  has_secure_password
  validates :name, { presence: true }
  validates :email, { presence: true, format: { with: VALID_EMAIL_REGAX }, uniqueness: { case_sensitive: false} }

  has_many :tweet
end
