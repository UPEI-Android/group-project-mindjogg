//user database
const User = require("../../account_management/models/schema/user_schema")


const addNewMoodRecord = async (user) => {
    // returnMessage will be used to return the status of the creation of the user
    const returnMessage = {
        status: null,
        message: null
    };

    try { 
         //finding user that matches username entered by passing query for id
        const result= await User.findById(user.id)
        if(result){
                //retrieving current user history and storing it to local array
                let userMoodHistory= [];
                userMoodHistory= await getUserMood(user);

                if(userMoodHistory==null){
                    //adding new mood to the daily array for mood
                    userMoodHistory.userMood.push(user.mood);
                }
                else {
                    //adding new mood to the daily array for mood
                    userMoodHistory.userMood.push(user.mood);
                }
               //updating user info in database
               await User.findByIdAndUpdate(user.id, { 
                   //mood history updated
                   userMood: userMoodHistory.userMood
                });
               console.log("user data updated");
               returnMessage.message = "user data updated";
               returnMessage.status = 200;
        }
        else{
        returnMessage.message = "User not found";
        returnMessage.status = 400;        }
   return returnMessage;
} catch (err) {
    console.log(err);
}
};



/**
 *  Retrieves a user's mood history
*/
const getUserMood = async (user) => {
    try {   
        const projection = {  
            "_id": 0,
           "userMood": 1
           }
        //returns list of users
        let result= [];
        result = await User.findOne({_id:user.id},projection);   
        console.log(result);
        return result;
    } catch (err) {
        console.log(err);
    }
};





module.exports = {
    addNewMoodRecord,
    getUserMood
 };
