## Textbox
The password box is a textbox component to handle passwords. It hides input, shows a lock icon, and will encrypt input.
It is always required. If you need an unrequired password field for whatever reason, feel free to update it.

Please note that icons and the URI system by which they are implemented will be updated when we have an icon library!

## Props
| Prop         | Desc     | Default Value | Type | Required |
|--------------|-----------|------------|--------|----------|
| Name | The name this field will be accessed by in a form     | "myTextbox"        |  String              | Yes|
| maxLength      | Maximum length (in characters) of accepted input  | 1000       |  Number    | No|
| minLength      | Minimum length (in characters) of accepted input  | 1       |  Number    | No|

## Examples
### Example 1: Basic textbox
The textbox can be brought in through a simple import statement. It is the default export, so no curly braces are needed.
`import PasswordBox from "./components/PasswordBox/PasswordBox";`

Then, it only requires a name to be provided:
`<PasswordBox name="myPasswordBox"/>`
