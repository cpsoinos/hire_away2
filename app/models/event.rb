class Event < ApplicationRecord
  belongs_to :venue
  has_many :event_positions, dependent: :destroy
  has_many :positions, through: :event_positions
end
