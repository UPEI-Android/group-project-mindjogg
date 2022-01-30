# User Registration Technical Documentation

Registering a User is an essential part of this application so it is important that it is documented.  
The basic overview for this feature is:

- [ ] User clicks Sign Up Button
- [ ] User inputs First Name
- [ ] User inputs Last Name
- [ ] User inputs Email
- [ ] User inputs desired password
- [ ] After user is satisfied, they click the Sign Up button to send their details to the server for processing

# How does this work behind the scenes?

The client side of the app implements a form which will submit the information entered by the user (this is done using HTTP Request Methods e.g. POST, GET etc.).  
When the express server recieves the method, we can access the request parameter of the HTTP request method sent to it (i.e (res, req) => {}). This can be seen in the file app\server\account_management\controllers\user_management_controller.js.

The userRegistration function accesses the req parameter and retrieves the information.  
This information needs to be stored in our database so a user object is created which holds the information supplied by the user and then sends it to the createUser function located in app\server\account_management\models\user_management_model.js

This function creates a new user using the schema for the database (refer to user_schema documentation) and then saves it to the database.

After this is done, the nodemailer (it can be found in app\server\account_management\controllers\user_management_controller.js) dependecy sends a welcome email to the user to notify them that their details has been stored in the database.
