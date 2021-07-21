class Instrument < ApplicationRecord
  # make sure we have data for the model
  validates :name, presence: true, uniqueness: { message: "NOOOOOPOOOO" }
  validates :rating, presence: true, length: { in: 0..100 }
  validates :section, presence: true

  # general format
  # validates :column, parameter: boolean OR { conditions, messages }
end
