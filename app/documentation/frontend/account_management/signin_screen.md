# Sign In Screen Technical Documentation

The sign in screen is the second screen the user sees when they click "Get Started" from the Splash Screen. It is the screen that allows them to sign in to their account.

## Sign In Screen Inputs

### Text Inputs

- Email or Username

  The email or username of the user.

- Password

  The password of the user.

### Buttons

- Sign In

  The button that allows the user to send a request to sign in.

- Sign Up

  The button that allows the user to go to the sign up screen.

- Forgot Password

  The button that allows the user to go to the forgot password screen.

## Sign In Screen Third Party Dependencies

### Form and Validation

The form and validation are handled by the third party library Formik and Yup.

## How Does Sign In Screen Works behind the scenes?

1. The user enters their information and clicks the "Sign In" button.
2. The information is sent to the backend through a POST request by the client side.
3. The backend then sends a response to the client side of the app. The response is a success message.
4. The user is then redirected to the home screen.
