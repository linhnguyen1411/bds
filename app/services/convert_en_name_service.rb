class ConvertEnNameService
  VIETNAMESE_CONVERT_TABLE = {
    "a" => ["à","á","ạ","ả","ã","â","ầ","ấ","ậ","ẩ","ẫ","ă","ằ","ắ","ặ","ẳ","ẵ"],
    "e" => ["è","é","ẹ","ẻ","ẽ","ê","ề","ế","ệ","ể","ễ"],
    "i" => ["ì","í","ị","ỉ","ĩ"],
    "o" => ["ò","ó","ọ","ỏ","õ","ô","ồ","ố","ộ","ổ","ỗ","ơ","ờ","ớ","ợ","ở","ỡ"],
    "u" => ["ù","ú","ụ","ủ","ũ","ư","ừ","ứ","ự","ử","ữ"],
    "y" => ["ỳ","ý","ỵ","ỷ","ỹ"],
    "d" => ["đ"],
    "A" => ["À","Á","Ạ","Ả","Ã","Â","Ầ","Ấ","Ậ","Ẩ","Ẫ","Ă","Ằ","Ắ","Ặ","Ẳ","Ẵ"],
    "E" => ["È","É","Ẹ","Ẻ","Ẽ","Ê","Ề","Ế","Ệ","Ể","Ễ"],
    "I" => ["Ì","Í","Ị","Ỉ","Ĩ"],
    "O" => ["Ò","Ó","Ọ","Ỏ","Õ","Ô","Ồ","Ố","Ộ","Ổ","Ỗ","Ơ","Ờ","Ớ","Ợ","Ở","Ỡ"],
    "U" => ["Ù","Ú","Ụ","Ủ","Ũ","Ư","Ừ","Ứ","Ự","Ử","Ữ"],
    "Y" => ["Ỳ","Ý","Ỵ","Ỷ","Ỹ"],
    "D" => ["Đ"]
  }

  class << self
    def normalize_strip_space(string)
      ret = replace_with_alphabet(string).gsub(/\W/, "")
      ret.blank? ? nil : ret
    rescue
      nil
    end

    def normalize_with_hyphen(string)
      ret = replace_with_alphabet(string).gsub(/\W/, "-")

      #incase we have special character at first and last, it looks stupid
      ret[0]  = "" if ret[0] == "-"
      ret[-1] = "" if ret[-1] == "-"

      ret.blank? ? nil : ret
    rescue
      nil
    end

    def replace_with_alphabet(string)
      normalize_string = string.dup
      mapping_table = {}

      VIETNAMESE_CONVERT_TABLE.each {|k,v| v.each{|char| mapping_table[char] = k} }
      mapping_table.each {|origin_char, normalize_char| normalize_string.gsub!(origin_char, normalize_char)}
      return normalize_string
    end
  end
end
