class ProductType < ApplicationRecord
  extend FriendlyId
  friendly_id :name, use: [:slugged, :finders]

  def normalize_friendly_id(input)
    ConvertEnNameService.normalize_with_hyphen(input).downcase
  end

  has_many :products

  validates :name, presence: true, length: { minimum: 5 }
end
