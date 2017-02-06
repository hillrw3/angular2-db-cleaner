class UsersController < ApplicationController

  def index
    render json: User.all
  end

  def show
    render json: user
  end

  def update
    user.update(params)
    render json: user
  end

  def destroy
    user.destroy
    render json: {}, status: :ok
  end

  private

  def user
    @user ||= User.find(params[:id])
  end
end