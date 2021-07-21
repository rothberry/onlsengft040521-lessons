class OwnersController < ApplicationController
  before_action :set_owner, only: [:show]
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found

  def index
    owners = Owner.all
    render json: owners
  end

  def show
    # if @owner
    render json: @owner
    # else
    #   render_not_found
    # end
  end

  private

  def set_owner
    @owner = Owner.find(params[:id])
    # @owner = Owner.find_by(id: params[:id])
  end

  def render_not_found
    render json: { error: "Not Found" }, status: :not_found
  end
end
