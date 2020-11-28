class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :email
      t.string :username
      t.string :password_digest
      t.integer :role, default: 0, null: false
      t.integer :gender
      t.timestamps
    end
  end
end
