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

// User CRUD routs

Route.get('/showAllUsers', 'UsersController.show') //Show all User
Route.get('/getSingleUser/:id', 'UsersController.getSingleUser')
Route.post('/checkToLogin', 'UsersController.checkToLogin')
Route.post('/updateEmailUsername', 'UsersController.updateEmailUsername')
Route.post('/storeUser', 'UsersController.store')
// Route.post('/updateIncomeCategoryTypeName', 'UsersController.updateTypeName')

// Route.post('/increseIncomeAmount', 'UsersController.increseIncomeAmount')
Route.get('/getUser', 'UsersController.getUser')
Route.get('/logout', 'UsersController.logout')

// User CRUD routs

// User CRUD routs

Route.get('/showAllPosts', 'PostsController.show') //Show all User
Route.post('/showAllPostsByUser', 'PostsController.showAllPostsByUser')
Route.post('/deletePost', 'PostsController.destroy')
// Route.get('/getSingleUser/:id', 'PostsController.getSingleUser')
// Route.post('/checkToLogin', 'PostsController.checkToLogin')
Route.post('/storePost', 'PostsController.store')
Route.post('/storePostImages', 'PostImagesController.store')
// Route.post('/updateIncomeCategoryTypeName', 'PostsController.updateTypeName')
// Route.post('/increseIncomeAmount', 'PostsController.increseIncomeAmount')

// User CRUD routs

// User CRUD routs

Route.post('/storeLike', 'LikesController.store')

// User CRUD routs
// User CRUD routs

Route.post('/storeComment', 'CommentsController.store')

// User CRUD routs
// User CRUD routs

Route.post('/storeCommentReply', 'CommentRepliesController.store')

// User CRUD routs

Route.post('/storeChat', 'ChatsController.store')
Route.post('/showChat', 'ChatsController.show')
Route.post('/createSession', 'ChatsController.createSession')
Route.get('/getSession', 'ChatsController.getSession')
