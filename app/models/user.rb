class User < ApplicationRecord
  before_save :downcase_email_username
  has_secure_password
  enum role: {user: 0, admin: 1}
  enum gender: [:female, :male, :other]

  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i.freeze

  validates :password, presence: true,
            length: {minimum: Settings.model.user.password_mini},
            allow_nil: true
  # validates :address, presence: true,
  #           length: {maximum: Settings.model.user.address_max}

  validates :email, presence: true,
            length: {maximum: Settings.model.user.email_max},
            format: {with: VALID_EMAIL_REGEX},
            uniqueness: {case_sensitive: true}

  # validates :phone, presence: true

  validates :username, presence: true,
            length: {maximum: Settings.model.user.max_username},
            uniqueness: {case_sensitive: true}

  private

  def downcase_email_username
    email.downcase!
    # username.downcase!
  end

end
