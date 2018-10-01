puts "Create dummy Product types"
ProductType.destroy_all
ProductType.create! name: "Đất nền dự án"
ProductType.create! name: "Đất thổ cư"
ProductType.create! name: "Nhà phố"
ProductType.create! name: "Villa"
ProductType.create! name: "Căn hộ chung cư"
ProductType.create! name: "Căn hộ cao cấp"

puts "Create admin"
Admin.destroy_all
Admin.create! email: "admin@framgia.com", password: "123123", password_confirmation: "123123"

puts "Create user"
User.destroy_all
User.create! name: "Linh Nguyễn", email: "linhnguyendn2305@gmail.com",
  password: "123123", password_confirmation: "123123"
User.create! name: "Nam Đào", email: "namdao0510@gmail.com",
  password: "123123", password_confirmation: "123123"
User.create! name: "Đoan Kun", email: "ledinhdoan@gmail.com",
  password: "123123", password_confirmation: "123123"
