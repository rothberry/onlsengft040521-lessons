# Create Route and Strong Params

Deliverables:

- Reinforce RESTful routing
- Dive deeper into the CREATE action route
- Learn about strong params

## Walkthrough

```bash
  rails new <app-name> --api --minimal --skip-test
```

- Create our **Coffee** Model and Controller

```ruby
  Coffee.create(name: "Churupampa", company: "Factory", whole_bean: true)
```

```bash
  rails g model Coffee name:string company:string whole_bean:boolean
  rails g controller Coffee
  # OR
  rails g resource Coffee name:string company:string whole_bean:boolean
```

This will create the model, controller, and open up all the routes for the Coffee controller

Restrict the routes to only the **index**, **show**, and **create**

```ruby 
  resources: :coffee, only: [:index, :show, :create]
```

Into the `coffee_controller.rb`

=> Creating the `index`, `show`, and `create` controllers
```ruby
  def index
    # will retrieve all the coffees in the db and render json
  end

  def show
    # will retrieve a coffee with id=params[:id] in the db and render json
  end

  def create
    # creates a new Coffee instance, 
    # if successful, render to json, 
    # if not, render error message
  end
```
JSON status codes
https://guides.rubyonrails.org/v5.1/layouts_and_rendering.html#using-render