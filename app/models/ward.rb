class Ward < ApplicationRecord

  belongs_to :district

  class << self
    def import_data file
      spreadsheet = Roo::Spreadsheet.open file
      header = spreadsheet.row(1)
      wards = []
      (2..spreadsheet.last_row).each do |i|
        row = [header, spreadsheet.row(i)].transpose.to_h
        ward = new row
        wards << ward
      end
      import! wards
    end
  end
end
