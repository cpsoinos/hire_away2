class CreateEventPositions < ActiveRecord::Migration[5.1]
  def change
    create_table :event_positions do |t|
      t.references :event, foreign_key: true
      t.references :position, foreign_key: true
    end
  end
end
