class Api::V1::GreetingsController < ApplicationController

    # def index
    #     @greetings = Greeting.all

    #     render json: @greetings, status: :ok
    #   end
      
    def random
        @greeting = Greeting.order("RANDOM()").first
        render json: { message: @greeting&.message || "No greetings available." }
      end    
end
