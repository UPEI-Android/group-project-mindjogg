# Introduction

This markdown file contains documentation on how to use the standard button component. It makes use of the React Native Paper Button Component for Styling.

# Features

This button is a standard text button which has a Text content and an icon and a press function.

# Component Props

This component has 3 props:

## buttonIcon

This will be a string and when supplied a value, will display an icon on the left side of the button.  
Well what values can you supply?  
You can supply any of the options supplied in the React Native Paper documentation [here](https://callstack.github.io/react-native-paper/icons.html).  
This is set to an empty string as default.

## text

This will be a string and when supplied a value, will display the supplied string within the button.  
By default, the text is set to "Unassigned Text"

## upperCaseOn

This is a boolean value and is set to true by default. It sets the text to Uppercase when true.

## buttonColour

This will be a string (has to be a color hexcode e.g. #00008B) and when supplied a value, will set the background colur of the button.  
By default, the prop is set to "#9B7FBA"

## buttonPress

This takes the function to be executed when the button is pressed.
By default, the function is just a console.log("I do nothing").

## buttonWidth

This sets the width of the button (i.e. how wide is the button).  
By default, it is set to 213.

## buttonHeight

This sets the height of the button (i.e. how tall is the button).  
By default, it is set to 54.

## Example

```
import StdButton from "...../filepath"

<StdButton
    text={"Go to Positive Journal Edit"}
    buttonColour={"#9B7FBA"}
    buttonWidth={100}
    buttonHeight={100}
    buttonPress={() => navigation.push("PositiveJournalEditScreen")}
/>

```
This is test 