AjaxTodo::Application.routes.draw do
	# STEP 4 - Create routes required for TasksController
  root :to => 'tasks#index'
  post '/' => 'tasks#create'
  put '/' => 'tasks#complete'
  delete '/' => 'tasks#destroy'
end
