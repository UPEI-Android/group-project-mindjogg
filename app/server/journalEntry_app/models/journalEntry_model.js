//user database
const User = require("../../account_management/models/schema/user_schema")


const addNewJournalRecord = async (user) => {
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
                let userJournalEntries= [];
                userJournalEntries= await getResults(user);
                if(userJournalEntries==null){
                    //adding new mood to the array of journal entry
                    userJournalEntries.userJournal.push(user.journalEntry);
                }
                else {
                    //adding new entry to the array of journal entry
                    userJournalEntries.userJournal.push(user.journalEntry);
                }
               //updating user Journal in database
               await User.findByIdAndUpdate(user.id, { 
                   //user Journal updated
                   userJournal: userJournalEntries.userJournal
                });
               console.log("user Journal updated");
               returnMessage.message = "user Journal updated";
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
           "userJournal": 1
           }
        //returns list of user's Journal entries
        let result= [];
        result = await User.findOne({_id:user.id},projection);   

        return result;
    } catch (err) {
        console.log(err);
    }
};

const getUserJournal = async (user) => {
    try {   
        const projection = {  
            "_id": 0,
           "userJournal": 1
           }
        //returns list of user's Journal entries
        let result= [];
        result = await User.findOne({_id:user.id},projection);   
        if(result.userJournal.length==0){
            result.userJournal.push( {type:"Type",title:"Your entries",entry:"will appear here"});
            return result;
        }
        return result;
    } catch (err) {
        console.log(err);
    }
};


const deleteJournalEntry = async (user) => {
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
                let userJournalEntries= [];
                userJournalEntries= await getResults(user);
                console.log(user.title);
                if(userJournalEntries==null){
                    //adding new mood to the array of journal entry
                    userJournalEntries.userJournal.push(user.journalEntry);
                }
                else {
                    //Removing entry to the array of journal entry
                    var filtered = userJournalEntries.userJournal.filter(function(value){ 

                        return value.title !== user.title;
                    });
                    //updating user Journal in database
                    await User.findByIdAndUpdate(user.id, { 
                        //user Journal updated
                        userJournal: filtered
                    });
                    console.log("user Journal updated");
                    returnMessage.message = "user Journal updated";
                    returnMessage.status = 200;
                }
         
        }
        else{
        returnMessage.message = "User not found";
        returnMessage.status = 400;        }
   return returnMessage;
} catch (err) {
    console.log(err);
}
};





module.exports = {
    addNewJournalRecord,
    getUserJournal,
    deleteJournalEntry
 };
