/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.group(() => {
  Route.post('ex2', 'Lista1sController.ex2')
  Route.post('ex1', 'Lista1sController.ex1')
  Route.post('ex3', 'Lista1sController.ex3')
  Route.post('ex4', 'Lista1sController.ex4')
  Route.post('ex5', 'Lista1sController.ex5')
  Route.post('ex6', 'Lista1sController.ex6')
  Route.post('ex7', 'Lista1sController.ex7')
  Route.post('ex8', 'Lista1sController.ex8')
  Route.post('ex9', 'Lista1sController.ex9')
}).prefix('/lista1')

Route.group(() => {
  Route.post('ex1', 'Lista2sController.ex1')
  Route.post('ex2', 'Lista2sController.ex2')
  Route.post('ex3', 'Lista2sController.ex3')
  Route.post('ex4', 'Lista2sController.ex4')
  Route.post('ex5', 'Lista2sController.ex5')
  Route.post('ex6', 'Lista2sController.ex6')
  Route.post('ex7', 'Lista2sController.ex7')
  Route.post('ex8', 'Lista2sController.ex8')
  Route.post('ex9', 'Lista2sController.ex9')
}).prefix('/lista2')