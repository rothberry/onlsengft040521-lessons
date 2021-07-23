# require "rake"

class ApplicationController < ActionController::API
  include ActionController::Cookies

  # @cols = Rake.application.terminal_width

  # def stars_wipe
  #   system "clear"
  #   puts "=" * Rake.application.terminal_width
  # end

  # def stars
  #   puts "*" * @cols
  # end

  # def star_arg(str)
  #   puts "*" * @cols
  #   puts "    #{str}    ".center(@cols, "*")
  #   puts "*" * @cols
  # end
end
