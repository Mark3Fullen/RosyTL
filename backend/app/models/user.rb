class User < ApplicationRecord
    has_many :events, dependent: :delete_all
    has_many :comments, dependent: :delete_all

    has_secure_password
end
