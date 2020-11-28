class User < ApplicationRecord
  enum role: {user: 0, admin: 1}

  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i.freeze
  VALID_PHONE_REGEX = (84|0[3|5|7|8|9])+([0-9]{8})\b.freeze
  validates :firstname, presence: true,
            length: {maximum: Settings.model.user.firstname_max}

  validates :lastname, presence: true,
            length: {maximum: Settings.model.user.lastname_max}


  validates :email, presence: true,
            length: {maximum: Settings.model.user.email_max},
            format: {with: VALID_EMAIL_REGEX},
            uniqueness: {case_sensitive: true}

  validates :user_name,presence: true,
            length:{maximum: Settings.model.user.max_username},
            uniqueness: {case_sensitive: true}

  validates :phone, presence: true,
            format: {with: VALID_PHONE_REGEX}

  validates :password, presence: true,
            length: {minimum: Settings.model.user.password_mini},
            allow_nil: true

  validates :address, presence: true,
            length: {maximum: Settings.model.user.address_max}
  validates :gender, inclusion: {in: [Settings.model.user.gender_male,Setting.model.user.gender_female]}

  private

  def downcase_email_username
    email.downcase!
    username.downcase!
  end
end
