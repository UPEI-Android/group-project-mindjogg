//user database
const User = require("../../account_management/models/schema/user_schema")


const addScheduleRecord = async (user) => {
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
                let userTaskEntries= [];
                userTaskEntries= await getResults(user);
                if(userTaskEntries==null){
                    //adding new task to the array of user tasks
                    userTaskEntries.userTasks.push(user.taskEntry);
                }
                else {
                    //adding new task to the array of user tasks
                    userTaskEntries.userTasks.push(user.taskEntry);
                }
               //updating user tasks in database
               await User.findByIdAndUpdate(user.id, { 
                   //user tasks updated
                   userTasks: userTaskEntries.userTasks
                });
               console.log("user Tasks updated");
               returnMessage.message = "user Tasks updated";
               returnMessage.status = 200;
        }
        else{
        returnMessage.message = "User not found";
        returnMessage.status = 400;  }
   return returnMessage;
} catch (err) {
    console.log(err);
}
};



/**
 *  Retrieves a user's Tasks
*/
const getResults = async (user) => {
    try {   
        const projection = {  
            "_id": 0,
           "userTasks": 1
           }
        //returns list of user's Tasks 
        let result= [];
        result = await User.findOne({_id:user.id},projection);   
        return result;
    } catch (err) {
        console.log(err);
    }
};

const getUserSchedule = async (user) => {
    try {   
        const projection = {  
            "_id": 0,
           "userTasks": 1
           }
        //returns list of user's Journal entries
        let result= [];
        result = await User.findOne({_id:user.id},projection);  
        if(result.userTasks.length==0){
            result.userTasks.push( {title:"no tasks yet",start: new Date(),end: new Date()});
            return result;
        }
        return result;
    } catch (err) {
        console.log(err);
    }
};





module.exports = {
    addScheduleRecord,
    getUserSchedule
 };
