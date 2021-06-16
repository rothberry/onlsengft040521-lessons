File structure

app
--models

config
--environment.rb

db
--migrate (auto generated from Rake tasks)
--development.sqlite
--schema.rb
--seeds.rb

README.md
Gemfile (similar to our package.json)
(activerecord, rake, require_all, sqlite3, pry, sinatra-ar)

Rakefile
(uses regular Ruby code(ish) to create Rake tasks)
