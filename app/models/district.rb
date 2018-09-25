class District < ApplicationRecord

  has_many :wards
  belongs_to :province
 class << self
    def import_data file
      spreadsheet = Roo::Spreadsheet.open file
      header = spreadsheet.row(1)
      districts = []
      (2..spreadsheet.last_row).each do |i|
        row = [header, spreadsheet.row(i)].transpose.to_h
        district = new row
        districts << district
      end
      import! districts
    end
  end
end
