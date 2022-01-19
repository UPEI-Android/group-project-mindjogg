# User Data Schema/Model

The model/schema for the users has been designed inn the table below.  
Please note: MongoDB automaticaly assigns an objectID to every document/user object entered so we can use that as the primary key for the document.

| Field          | Data Type | Description                                        |
| -------------- | --------- | -------------------------------------------------- |
| userName       | String    | User Login Name, can serve as primary key          |
| userPassword   | String    | User Password, may be encrypted for security       |
| userFirstName  | String    | Users First Name                                   |
| userLastName   | String    | Users Last Name                                    |
| userMiddleName | String    | Users Middle Name, will be optional                |
| userEmail      | String    | Users email address                                |
| userGoals      | JS Array  | An array of strings to store all goals             |
| userTasks      | JS Array  | An array of strings to store all tasks             |
| userJournal    | URL       | Contain a link to the users journal implementation |
| userMood       | JS Object | An object to help model the users moods            |

# userMood Object Structure

All mood instances will hold objects with instances of {status : boolean, percentage : int}.  
The status instance will indicate true when mood is present and false otherwise.  
The percentage instance will hold a number value to show the level at which the mood is at.

| Mood      | Data Type |
| --------- | --------- |
| Happy     | JS Object |
| Sad       | JS Object |
| Stressed  | JS Object |
| Angry     | JS Object |
| Anxious   | JS Object |
| Bored     | JS Object |
| Hopeful   | JS Object |
| Depressed | JS Object |

# Documentation

We would be making use of an npm framework called Mongoose to easily connect and access our database on MongoDB.  
To learn more, check out the official documentation of (Mongoose)[https://www.npmjs.com/package/mongoose].
