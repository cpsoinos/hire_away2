class Position < ApplicationRecord
  has_many :event_positions
  has_many :events, through: :event_positions
end
