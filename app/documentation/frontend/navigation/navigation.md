# MindJOGG App Navigation

The [React Navigation 6](https://reactnavigation.org/docs/getting-started/) library is used to create the navigation for the app.

## The Navigation

Three types of navigation are used in the app:

- The drawer navigation
- The tab navigation
- The stack navigation

## The Navigation Flow

The app uses nested navigation. The app starts with the drawer navigation. The drawer navigation is the first screen the user sees. The drawer navigation is the navigation that allows the user to navigate to the tab navigation. The tab navigation is the navigation that allows the user to navigate to the stack navigation. The stack navigation is the navigation that allows the user to navigate to the screens of the app.

## Add New Screen

Any new screen of an existing feature should be added to the stack navigator of the feature.

## Add New Feature

A new feature with screens will create a new stack navigator. The stack navigator will be added to the tab navigator. The tab navigator will be added to the drawer navigator if it is not already added. The first screen of the stack navigator will be the first screen of the feature. The first screen will contain the drawer navigation hamburger menu and rest of the screens will not have the drawer navigation hamburger menu.
