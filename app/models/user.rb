class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
    :recoverable, :rememberable, :trackable, :validatable

  has_many :products
  has_many :articles

  belongs_to :company

  enum gender: {male: 0, female: 1, undefined: 2}
  enum status: {actived: 0, blocked: 1}
  enum role: {buyer: 0, saler: 1, mod: 2, admin: 3}

end
