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
        return result;
    } catch (err) {
        console.log(err);
    }
};

/**
 *  Retrieves a user's mood history in formatted way
*/
const getNewMood = async (user) => {
    try {   
        const projection = {  
            "_id": 0,
           "userMood": 1
           }
        //returns list of users
        let result= [];
        result = await User.findOne({_id:user.id},projection);  
        const moods=result.userMood; 
        var moodHistory=[];  
        for (let i = 0; i < moods.length; i++) {      
          moodHistory.push({id : i , mood : moods[i].moodName,moodDate : moods[i].timeofDay, moodNote: moods[i].moodNote});
        }

        return moodHistory;
    } catch (err) {
        console.log(err);
    }
};



const frequencyMoods= async (user)=>{
    let result= [];
    let userMoodHistory= [];
    result= await getUserMood(user);
    userMoodHistory=result.userMood;
    let HappyCount=0;
    let sadCount=0;
    let loveCount=0;
    let angryCount=0,LonelyCount=0,CryCount=0,HungryCount=0;
    let boredCount=0,WorriedCount=0,SleepyCount=0,BlessedCount=0,SickCount=0;



    for (let i = 0; i < userMoodHistory.length; i++) {
        
        switch(userMoodHistory[i].moodName) {
            case "happy":
              HappyCount++;
              break;
            case "sad":
              sadCount++;
              break;
            case "love":
                loveCount++;
                break;
            case "angry":
                angryCount++;
                break;
            case "bored":
              boredCount++;
              break;
            case "Worried":
                WorriedCount++;
              break;
            case "Blessed":
                BlessedCount++;
                break;
            case "Sleepy":
                SleepyCount++;
                break;
            case "Sick":
                SickCount++;
              break;
            case "Lonely":
                LonelyCount++;
                break;
            case "Cry":
                CryCount++;
                break;
             case "Hungry":
                HungryCount++;
                    break;
            default:
              
          }
       
    }

    const frequencies =[{mood : "happy",moodFrequency: HappyCount},
    {mood : "sad" , moodFrequency : sadCount} , {mood : "love",moodFrequency:loveCount},{mood : "love",moodFrequency:loveCount},
    {mood : "angry",moodFrequency:angryCount},{mood : "bored",moodFrequency:boredCount},{mood : "Worried",moodFrequency:WorriedCount},
    {mood : "Blessed",moodFrequency:BlessedCount},{mood : "Sleepy",moodFrequency:SleepyCount},{mood : "Sick",moodFrequency:SickCount},
    {mood : "Lonely",moodFrequency:LonelyCount},{mood : "Cry",moodFrequency:CryCount},{mood : "Hungry",moodFrequency:HungryCount}];
    return frequencies;

};



module.exports = {
    addNewMoodRecord,
    getUserMood,
    frequencyMoods,
    getNewMood
 };
