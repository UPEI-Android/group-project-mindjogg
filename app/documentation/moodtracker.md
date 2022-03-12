# Moodtracker Technical Documentation

 Moodtracker feature documentation:

- [ ] User clicks on login or sign up
- [ ] App navigates to moodtracker popup screen
- [ ] User Selects their mood
- [ ] User enters small note together
- [ ] User clicks on save
- [ ] App sends post request to backend to save new mood info
- [ ] App navigates to new page in the pop up with mood history
- [ ] App navigates to new page in the pop up with mood history
- [ ] User can click on cross on top to close moodtracker




# How does this work behind the scenes?

The client side of the app implements an mood tracker screen which will send new mood user data to backend through Post request (this is done using HTTP Request Methods e.g. POST, GET etc.).  

data in body should be in the following format

{
    "timeofDay": "July 23, 2022 01:15:00",
    "moodName": "happy",
    "moodNote": "just graduated!"
}

When the express server recieves the method, we can access the request parameter of the HTTP request method sent to it (i.e (res, req) => {}). This can be seen in the file app\server\moodtracker_app\controllers\moodtracker_controller.js.

The updateMoodInfo function accesses the req parameter and retrieves the information.  
This information needs to be stored in our database so a user object is updated  which holds the information supplied by the user and then sends it to the addNewMoodRecord function located in  app\server\moodtracker_app\models\moodtracker_model.js.

This function updates user mood info and saves it to the database.


/moodtracker/addmood route is used

The client side of the app also implements a mood history screen which will send new mood user data to backend through Get request (this is done using HTTP Request Methods e.g. POST, GET etc.).  

Data that is returned is in the form of an array in json , it will need to be mapped into mood history objects in the frontend, very similar to emergency support frontend

When the express server recieves the method, we can access the request parameter of the HTTP request method sent to it (i.e (res, req) => {}). This can be seen in the file app\server\moodtracker_app\controllers\moodtracker_controller.js.

/moodtracker/getMood route is used

The getMoodhistory function accesses the req parameter and retrieves the information.  
This information is retrieved from our database and then sends it to the getUserMood function located in  app\server\moodtracker_app\models\moodtracker_model.js.

This function updates user mood info and saves it to the database.