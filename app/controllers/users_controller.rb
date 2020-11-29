class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new user_params
    if @user.save
      flash[:success] = t "user_controller.success"
      redirect_to root_path
    else
      flash[:warning] = t "user_controller.unsuccess"
      render :new
    end
  end

  private

  def user_params
    params.require(:user)
          .permit(:username, :email, :password, :password_confirmation)
  end
end
