# Authentication

## Authentication Stack

Authentication stack is the stack navigation that allows the user to navigate to the screens of the authentication feature.

## Authentication Screens

- Sign In Screen
- Sign Up Screen
- Forgot Password Screen

## Authentication Technical Documentation

Authentication stack is imported to app.js. The stack is visible to the user when the user is not signed in and there is no user authentication token in the local storage. When the user is signed in, the stack is not visible to the user and the user is presented with drawer navigator which holds all the feature of the app. If the user is already signed in (the user has a user authentication token in the local storage), the stack is not visible to the user.
