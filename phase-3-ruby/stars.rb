require "rake"

def stars_wipe
  system "clear"
  puts "=" * Rake.application.terminal_width
end

def stars
  puts "*" * Rake.application.terminal_width
end
