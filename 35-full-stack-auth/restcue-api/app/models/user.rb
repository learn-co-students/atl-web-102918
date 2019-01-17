class User < ApplicationRecord
  has_secure_password

  validates :email, presence: true, uniqueness: true, format: {
    with: /.+\@.+\..+/
  }
  validates :name, presence: true
  validates :avatar, presence: true
end
