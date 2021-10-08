class CreateEvents < ActiveRecord::Migration[6.1]
  def change
    create_table :events do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.string :title
      t.string :cardTitle
      t.string :cardSubtitle
      t.string :cardDetailedText
      t.string :url

      t.timestamps
    end
  end
end
