puts "Create dummy Product types"
ProductType.destroy_all
ProductType.create! name: "Đất nền dự án"
ProductType.create! name: "Đất thổ cư"
ProductType.create! name: "Nhà phố"
ProductType.create! name: "Villa"
ProductType.create! name: "Căn hộ chung cư"
ProductType.create! name: "Căn hộ cao cấp"

puts "Create admin"
Admin.create! email: "admin@framgia.com", password: "123456", password_confirmation: "123456"
