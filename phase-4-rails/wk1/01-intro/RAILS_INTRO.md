# Rails Intro

## [Rails Guide](https://guides.rubyonrails.org/index.html)
## Deliverables

- What is rails?
- Understanding the file structure
- rails console commands
- rails generators


### Creating a new Rails app


```shell
  # to create full rails app
  > rails new <app-name> [options]
  # to rails only as an API
  > rails new <app-name> --api
```

## Important file locations/structure

Most of the coding will be done inside the 'app' folder, more specifically the 'models' and 'controllers' folders.

config 
=> routes.rb
=> also contains specifc environments for testing (dev, prod, test)

db
=> instead of using rake db commands, we will now use rails commands to communicate with our ORM

## Rails Console commands

[Console Commands Guide](https://guides.rubyonrails.org/command_line.html)
```bash
  rails console || rails c
  rails server || rails s
  rails routes # add -c with a controller name to only see that controller's routes
  
  # Generators: use the rails generators for creating your models/controllers/etc to avoid conflicts of typos and other errors
  rails generator [type] || rails g [type]

  # creates the model/migration
  rails g model [ModelName] [ColumnName:ColumnType]...
  # creates the controller only
  rails g controller [CtrlerName]
  # creates model/migration/controller/routes
  rails g resources [ModelName] [ColumnName:ColumnType]...

  # db commands
  rails db:migrate
  rails db:seed

```