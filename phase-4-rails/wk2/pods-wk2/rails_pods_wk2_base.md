# Rails Pod Activities

### Questions?

1. What is a Model in Rails
    * A blueprint that describes a thing
    * A noun
    
2. What is a Controller?
    * The connector between the Model and the Dev
    * Verb/action

3. What are some of the `rails generators`?
    * Creates the files in the correct format
    * `rails g resource ...`
    * `rails g controller ...`
    * `rails g model ...`

4. How can we define a `route` in rails?
    * http '/url/', to: "controller#method/action"
    * get '/everything', to: "dogs#all_the_dogs"
    * resources :dogs
    * resources :dogs, only: [:index, :show, :create]
    * resources :dogs, except: [:update, :destroy]
    * `rails routes -c <controller-name>`

5. What strong params? and where are they located?
    * Using a method to permit the certain paramaters
    * private section

6. What is model validation used for?
    * Make sure that the user is submitting the correct info

7. Types of validation:
    * presence
    * uniqueness
    * length
    * numericaly
    * includes












    
---



---

## GROUP PROGRAMMING

Create an API for a Rails Diner

Models: 
- **Dish** ...plural => Dishes
- **Ingredient**
- Many to Many relationship *hint: might need a third table*

Routes/Controllers:
- Dish
    * `index`, `show`, `create`, `update`, `delete` 
    * For the `show` route, the render should **include** all of the ingredients in it
- Ingredient
    * `index`, `show`, `create`, `delete`
    * For the `show` route, the render should **include** all of the dishes it's in

