namespace :data do
  desc "import data"
  require 'spreadsheet'

  task import: :environment do
    provinces = File.join Rails.root, "provinces.xls"
    excel_provinces = Spreadsheet.open provinces
    sheet_provinces = excel_provinces.worksheet 0
    sheet_provinces.each do |item|
      value = { name: item[0], code: item[1], province_type: item[2] }
      Province.create(value)
    end

    districts = File.join Rails.root, "districts.xls"
    excel_districts = Spreadsheet.open districts
    sheet_districts = excel_districts.worksheet 0
    sheet_districts.each do |item|
      value = { name: item[0], code: item[1], district_type: item[2], province_id: item[3] }
      District.create(value)
    end

    wards = File.join Rails.root, "wards.xls"
    excel_wards = Spreadsheet.open wards
    sheet_wards = excel_wards.worksheet 0
    sheet_wards.each do |item|
      value = { name: item[0], code: item[1], ward_type: item[2], district_id: item[3] }
      Ward.create(value)
    end
  end
end
