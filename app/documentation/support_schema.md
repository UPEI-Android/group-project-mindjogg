# Emergency Support Services: Store Them

I have decided it would be best to store the data about the emergency support services in our database in its own collection.

# Service Schema

Each document in the service collection should make use of the schema

| Schema Obj Name | Type   | Description                                               |
| --------------- | ------ | --------------------------------------------------------- |
| name            | String | The name of the service                                   |
| type            | String | What type of service is it? Will help us categorize later |
| phone           | String | Phone Number to Contact Service                           |
| email           | String | Email to contact service if the service has one           |
| address         | String | Where to find service if it has a physical location       |
| description     | String | Description of the service and what it offers             |

# How to Use

The schema has been created in the path app\server\emergency_support_app\model\support_schema.js  
And a corresponding model "SupportService" has been created within it.  
To make use of the shema, just import the SupportService model into your js file.
