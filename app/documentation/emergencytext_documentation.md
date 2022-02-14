# Introduction

We intend to send out emergency texts to our users emergency contacts in the event of a situation where we notice that our user is in need of some physical help. But how would we accomplish that?  
Upon further reasearch, I have come across an npm package that can be used to send out texts to a set of numbers provided. It is called "react-native-sms", it has support for both android and iOS

# Setup

Instructions for the set up is on the documentation page [here](https://www.npmjs.com/package/react-native-sms).

# How to Use in Code

```
SendSMS.send(myOptionsObject, callback);
```

myOptionsObject has a couple properties, details on the documentation

# Usage Idea

We could track the users mood and if we notice that they are feeling a little down, we could ask them if they would like to inform their emergency contacts, if they say yes, this will activate/execute the sendsms fucntion included in the react-native-sms package using the emergency contacts and a pre-defined default text message.
