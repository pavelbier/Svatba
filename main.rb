require 'rubygems'
require 'sinatra'
require 'sass'
#require 'coffee-script'

  
set :public, File.dirname(__FILE__) + '/static'

#get '/application.js' do
#    coffee :application
#end

get '/css/page.css' do
  	#header 'Content-Type' => 'text/css; charset=utf-8'
	content_type 'text/css', :charset => 'utf-8'
	scss :page
end

get '/' do
	@mraku = 10+rand(10)
	erb :index
end