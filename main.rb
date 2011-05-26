require 'rubygems'
require 'sinatra'
require 'coffee-script'

#default test
  
set :public, File.dirname(__FILE__) + '/static'

get '/application.js' do
    coffee :application
end

get '/' do
	erb :index
end