## Textbox
The textbox is a component which provides an area for text input to be used in forms. It is possible to display an icon next to the
text input area through props. 

## Props
| Prop         | Desc     | Default Value | Type | Required |
|--------------|-----------|------------|--------|----------|
| Name | The name this field will be accessed by in a form     | "myTextbox"        |  String              | Yes|
| maxLength      | Maximum length (in characters) of accepted input  | 1000       |  Number    | No|
| minLength      | Minimum length (in characters) of accepted input  | 1       |  Number    | No|
| Placeholder      | Text to be shown before any input provided  | "Enter text here"       |  String    | No|
| required      | Is input required in this field before the form can be submitted  | False       |  Boolean    | No|
| icon      | An icon element to be shown to the left of the text input | null       |  Object (MaterialCommunityIcon)    | No|


## Examples
### Example 1: Basic textbox
The textbox can be brought in through a simple import statement. It is the default export, so no curly braces are needed.
`import Textbox from "./components/Textbox/Textbox";`

Then, it only required a name to be provided:
`<Textbox name="my_input"/>`

### Example 2: Using an icon
If no icon is provided, none will be used. However, if one is provided, the text area will shift to make room for it.
Here, we bring in a simple 24px by 24px 'lock' icon to be shown next to our input. 
<Textbox name="locked_input" icon={<MaterialCommunityIcons name="lock" size={24}/>}/>
