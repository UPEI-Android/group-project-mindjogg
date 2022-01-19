# MindJoGG

## Description
The React Native app for MindJoGG is the client side of the MindJoGG App.

## Getting Started

Work in the existing project.

1. Download the latest version of [Node.js (V16.13.2)](https://nodejs.org/en/) and npm.
2. Clone the [MindJoGG github repository.](https://github.com/UPEI-Android/group-project-mindjogg.git)
3. Go to target branch (e.g., dev, stage, dev_feature1 etc).
4. Navigate to "app/client/mindjogg" directory.
5. Run ``` npm install ``` to install all dependencies.
6. Run ``` npm start ``` to start the development server.

## Setting up th Development Environment for React Native with Expo CLI (If neeeded)

Create a new Expo project.

1. Download the latest version of [Node.js (V16.13.2)](https://nodejs.org/en/) and npm.
2. Clone the [MindJoGG github repository.](https://github.com/UPEI-Android/group-project-mindjogg.git)
3. Go to target branch (e.g., dev, stage, dev_feature1 etc).
4. Navigate to "app/client" directory.
5. Run ``` npm install -g expo-cli ``` to install Expo CLI.
6. Run ``` expo init MindJoGG ``` to initialize the project.
7. Chose a template from "Managed workflow : blank" option.
8. cd into the project directory.
9. Run ``` npm start ``` to start the development server.
10. Test the app by Metro Bundler opened in localhost server.

### Note: The expo-cli creates a new git repository inside the existing project repository. To remove the git repository, delete the ".git" hidden folder in mindjogg directory. 
 **Delete .git folder:** ``` rm -rf .git ``` or got window file explorer and navigate to mindjogg directory. Then click "view" in the file folder. Then select the "Hidden Items" option. Then select ".git" folder and make it visible using "Hide selected item / Show selected item". Then click the ".git" the "delete" the folder.