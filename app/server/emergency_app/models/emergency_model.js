
//Emergency database
const Emergency = require("./schema/support_schema")

/**
 *  Retrieves a emergency list  from the database.
*/
const getEmergencyList = async () => {
    try {
        //returns Emergency support list
        const result = await Emergency.find({});
       return result;
    } catch (err) {
        console.log(err);
    }
};


/**
 * Creates a new emergency and adds it to the database if it doesn't already exist.
 * @param {Object} emergency the emergency object to be added to the database
 */
 const createEmergencySupport = async (emergency) => { 
    try {
 
        //adding attributes to new user 
        const newEmergency = new Emergency({
           //emergency support fields
           name: emergency.name,
           type: emergency.type,
           phone:emergency.phone,
           email: emergency.email,
           address:emergency.address,
           description: emergency.description
        });

        // returnMessage will be used to return the status of the creation of the emergency support
        const returnMessage = {
            status: null,
            message: null
        };

        //check if emergency support exist in database
        const result= await  Emergency.findOne({emergencyName: emergency.emergencyName},{"emergencyName":1})

        //if username exists
        if(result){
            returnMessage.status = 400;
            returnMessage.message = "Emergency support already exists";
        }
        //if no existing emergency exists
        else {
           //save emergency object to database
            newEmergency.save();
            returnMessage.status = 201;
            returnMessage.message = "Emergency support successfully created";
        }

        return returnMessage; 
    } catch (err) {
        console.log(err);
    }
};



module.exports = {
    getEmergencyList,
    createEmergencySupport
 };






