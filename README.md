# Front-end Project Advanced

## Requirement

1. Endpoint: [https://fakeapi.platzi.com/](https://fakeapi.platzi.com/)
2. Pages AT LEAST: Home, Product, Profile, Cart
    Profile - only available if user logins
    Cart - can be a page or a modal
3. Button - to switch themes of the web app
4. Store Reducer:
    - get all products
    - find a single products
    - sort products by categories
    - sort products by price
    - update and delete a product (enable update & delete features only for admin of the webapp)
   User Reducer:
    - get all users
    - find a single user (feature not supported by API no longer)
    - create new user (delete user is not allowed in this api)
    - authenticate user
   Cart Reducer:
    - add product to cart
    - remove products
    - update products's quantity in cart
5. When adding routers to your application, programatically set certain routes to be private. For example, route to user profile page should not be accessible if user has not logged in.

## Instruction to start the project

In the project directory, you can run:

### `npm install`

Install all the dependencies

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
