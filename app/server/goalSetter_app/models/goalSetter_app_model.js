//user database
const User = require("../../account_management/models/schema/user_schema")


const addNewGoal = async (user) => {
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
                let userGoalEntries= [];
                userGoalEntries= await getResults(user);
                if(userGoalEntries==null){
                    //adding new mood to the array of journal entry
                    userGoalEntries.userGoals.push(user.goalEntry);
                }
                else {
                    //adding new entry to the array of journal entry
                    userGoalEntries.userGoals.push(user.goalEntry);
                }
               //updating user Journal in database
               await User.findByIdAndUpdate(user.id, { 
                   //user Journal updated
                   userGoals: userGoalEntries.userGoals
                });
               console.log("user Goal updated");
               returnMessage.message = "user Goal updated";
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
 *  Retrieves a user's Journal entries
*/
const getResults = async (user) => {
    try {   
        const projection = {  
            "_id": 0,
           "userGoals": 1
           }
        //returns list of user's Journal entries
        let result= [];
        result = await User.findOne({_id:user.id},projection);   

        return result;
    } catch (err) {
        console.log(err);
    }
};

const getUserGoal = async (user) => {
    try {   
        const projection = {  
            "_id": 0,
           "userGoals": 1
           }
        //returns list of user's Journal entries
        let result= [];
        result = await User.findOne({_id:user.id},projection);   
        if(result.userGoals.length==0){
            result.userGoals.push( {title:"No goals",specific: "no entries",measurable:"no entries", 
            attainable:"no entries",relevant:"no entries",time:"no entries"});
            return result;
        }
        return result;
    } catch (err) {
        console.log(err);
    }
};





module.exports = {
    addNewGoal,
    getUserGoal
 };
