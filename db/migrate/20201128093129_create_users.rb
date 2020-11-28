class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :firstname
      t.string :lastname
      t.string :phone
      t.string :email
      t.string :address
      t.integer :gender
      t.integer :role
      t.string :username
      t.string :password_digest
      t.string :remmeber_digest

      t.timestamps
    end
  end
end
