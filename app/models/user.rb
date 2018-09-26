class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
    :recoverable, :rememberable, :trackable, :validatable

  has_many :products
  has_many :articles

  belongs_to :company, optional: true

  enum gender: {male: 0, female: 1, undefined: 2}
  enum status: {actived: 0, blocked: 1}
  enum role: {buyer: 0, saler: 1, mod: 2, admin: 3}

  validates :name, presence: true, length: {in: 4..20}
end
