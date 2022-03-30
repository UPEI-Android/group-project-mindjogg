# Sign Up Screen Technical Documentation

The sign up screen is the third screen the user sees when they click "Sign Up" from the Sign In Screen. It is the screen that allows them to create an account.

## Sign Up Screen Inputs

### Text Inputs

- First Name

  The first name of the user.

- Last Name

  The last name of the user.

- Username

  The username of the user.

- Email

  The email of the user.

- Password

  The password of the user.

### Buttons

- Sign Up

  The button that allows the user to send a request to create an account.

- Sign In

  The button that allows the user to go back to the sign in screen.

## Sign Up Screen Third Party Dependencies

### Form and Validation

The form and validation are handled by the third party library Formik and Yup.

## How Does Sign Up Screen Works behind the scenes?

1. The user enters their information and clicks the "Sign Up" button.
2. The information is sent to the backend through a POST request by the client side.
3. The backend then creates a new user object and saves it to the database.
4. The backend then sends a response to the client side of the app. The response is a success message.
5. The user is asked to confirm their email.

6. Once the user confirms their email, the user is redirected to the sign in screen.
