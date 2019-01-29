class ApplicationController < ActionController::API
  def current_user
    token = request.headers['Access-Token']
    payload = JWT.decode(token, ENV['APP_SECRET'])[0]
    user_id = payload['user_id']
    user_id && User.find_by(id: user_id)
  rescue JWT::DecodeError
    nil
  end

  def authenticate!
    unless current_user
      render json: { errors: 'Not logged in' }, status: :unauthorized
    end
  end
end
