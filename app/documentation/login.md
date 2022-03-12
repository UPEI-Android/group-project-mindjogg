# Login Technical Documentation

Login feature documentation:

- User clicks Sign in Button
- User inputs user Name -> could be email or username itself
- User inputs Password
- User clicks Sign in
- App sends data entered to backend to validate
- Backend sends back login token
- App saves login token in async storage

# How does this work behind the scenes?

The client side of the app implements a sign in  which will send user data to  backend through POST request (this is done using HTTP Request Methods e.g. POST, GET etc.).  

When the express server recieves the method, we can access the request parameter of the HTTP request method sent to it (i.e (res, req) => {}). This can be seen in the file app\server\account_management\controllers\user_management_controller.js

The userLogin function accesses the req parameter and retrieves the information and sends it back through res parameter.  
Response is in json from the loginUser function located in app\server\account_management\models\user_management_model.js

This function Sends user data to backend and returns token if successfully logged in
Token returned will need to be stored in the async storage in the front end app

After this is done, the react native screen for home screen should be displayed