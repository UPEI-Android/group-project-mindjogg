# Edit profile Technical Documentation

Edit profile feature documentation:

-  User clicks on Hamburger menu
-  User clicks on edit profile button
- App navigates to new page 3 buttons : personal info, contact info, password
- User selects personal info
    - App navigates to new page specific for personal info with a form for input
    - App populates form with existing user data
    - User changes First Name
    - User changes Middle Name
    - User changes Last Name
    - User changes Date of Birth
    - User clicks save
    - save button triggers patch request to backend

- User selects contact info
    - App navigates to new page specific for personal info with a form for input
    - App populates form with existing user data
    - User changes Email
    - User changes Phone
    - User clicks save
    - save button triggers patch request to backend




# How does this work behind the scenes?

The client side of the app implements an edit profile screen which will send new user data to backend through PATCH request (this is done using HTTP Request Methods e.g. POST, GET etc.).  

When the express server recieves the method, we can access the request parameter of the HTTP request method sent to it (i.e (res, req) => {}). This can be seen in the file app\server\account_management\controllers\user_management_controller.js.

The updateContactInfo, updatePersonalInfo function accesses the req parameter and retrieves the information.  
This information needs to be stored in our database so a user object is updated  which holds the information supplied by the user and then sends it to the updatePersonalInfo, updateContactInfo function located in app\server\account_management\models\user_management_model.js

This function updates user info and saves it to the database.
