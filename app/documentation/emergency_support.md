# Emergency suppport Technical Documentation

Emergency suppport feature documentation:

- User clicks Emergency support button
- User clicks on emergency support option
- App fetches emergency support lists and populates app with results
- User selects emergency support card
- App navigates to new page specific for emergency support

# How does this work behind the scenes?

The client side of the app implements an emergency support button which will fetch emergency support list from backend through GET request (this is done using HTTP Request Methods e.g. POST, GET etc.).  

When the express server recieves the method, we can access the request parameter of the HTTP request method sent to it (i.e (res, req) => {}). This can be seen in the file app\server\emergency_app\controllers\emergency_controller.js

The emergencySupportCreate function accesses the req parameter and retrieves the information and sends it back through res parameter.  
Response is in json from the getEmergencyList function located in app\server\emergency_app\models\emergency_model.js

This function retrieves list of emergency support objects and returns if in json format to frontend.
Mapping will need to be done in front end to convert json to emergency support objects

After this is done, the react native screen for emergency support will generate cards based on the list of emergency support objects retrieved