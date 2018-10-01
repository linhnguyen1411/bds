class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
    :recoverable, :rememberable, :trackable, :validatable

  USER_ATTR = [:name, :public_email, :gender, :avatar, :personal_phone, :company_phone,
    :facebook_url, :website, :company, :status, :position]
  mount_uploader :avatar, AvatarUploader

  has_many :products
  has_many :articles

  enum gender: {male: 0, female: 1, undefined: 2}
  enum status: {actived: 0, blocked: 1}
  enum role: {buyer: 0, saler: 1, mod: 2, admin: 3}

  validates :name, presence: true, length: {in: 4..20}
end
