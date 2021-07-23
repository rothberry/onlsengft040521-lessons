class Instrument < ApplicationRecord
  belongs_to :user
  validates :name, :section, :rating, presence: true
end
