class Province < ApplicationRecord

  has_many :districts
  class << self
    def import_data file
      spreadsheet = Roo::Spreadsheet.open file
      header = spreadsheet.row(1)
      provinces = []
      (2..spreadsheet.last_row).each do |i|
        row = [header, spreadsheet.row(i)].transpose.to_h
        province = new row
        provinces << province
      end
      import! provinces
    end
  end
end
