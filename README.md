# OldMobiles.com

This is a small SPA react app that I built to showcase my skill level with react and redux RTK to Zara devs team. It is a simple app that allows you to browse through a list of mobile phones and see their details. It also allows you to add a new phone to the list.

## The prerequisites for this project are:
- Two views: a list of phones (ProductListPage) and a detail view of a phone (ProductsDetailPage).
- The list of phones should be fetched from the API endpoint provided.
- The detail view should be fetched from the API endpoint provided.
- The detail view should have a button to add the phone to the cart.
- All data should be persisted for one hour to avoid unnecessary API calls.
- The cart should be persisted in the browser's local storage.
- The cart should be accessible from all two views.
- 

## This SPA is built using the following technologies:

- React
- Redux RTK for state management and RTK Query for data fetching
- React Router
- React Bootstrap for styling and layout components
- Redux-persist for persisting the state to local storage
- Redux-persist-expire for expiring the persisted state after a certain time (1 hour)
- React-testing-library with Jest for testing

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
