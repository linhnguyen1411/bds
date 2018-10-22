class Product < ApplicationRecord
  extend FriendlyId
  friendly_id :slug_candidates, use: [:slugged, :finders]

  def slug_candidates
    [
      :title,
      [ :title, :product_type_id ]
    ]
  end

  def normalize_friendly_id(input)
    ConvertEnNameService.normalize_with_hyphen(input).downcase
  end

  has_many :product_images

  has_one :ward
  has_one :district
  has_one :province
  has_one :product_detail
  has_one :product_extension

  belongs_to :product_type

  enum status: {for_rent: 0, for_sale: 1, buy: 2}
  enum certificate: {home_ownership: 0, land_use_right: 1, certificate: 2}
  enum unit: {deal: 0, million: 1, billion: 2}
  before_create :conver_title

  def should_generate_new_friendly_id?
    title_changed? || super
  end

  def conver_title
    ConvertEnNameService.normalize_with_hyphen(self.title)
  end
end
