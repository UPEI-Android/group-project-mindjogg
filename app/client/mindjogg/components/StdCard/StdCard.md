## Standard Card
StdCard is a card component with a white background. It shows a title and subtitle, and optionally a description, along with a "learn more" button.
Functionality for clicking "learn more" and clicking the card can be passed in as props

## Props
| Prop         | Desc     | Default Value | Type | Required |
|--------------|-----------|------------|--------|----------|
| title | The title to be shown at the top of the card|   "Title"    |       string     | Yes|
| subtitle | Smaller text to be shown under the title |    "Subtitle"   |     string       | Yes|
| description | Text to be shown in the body of the card|    ""   |     string       | No|
| elevation | Affects how much shadow will be around the card|  1     |     number       | No|
| buttonPress | Functionality for clicking "learn more" |   () => {console.error("[-] Please provide button press functionality! [-]")}    |     any       | Yes|
| buttonLongPress | Functionality for long clicking "learn more" |    () => {}   |   any         | No |
| cardPress | Functionality for clicking the card itself |    () => {}   |      any      | No|
| cardLongPress | Functionality for long clicking the card itself |    () => {}   |    any        | No|
| height | Card's height |    150  |    number        | No|
| width | Card's width |    250  |    number        | No|

## Examples
### Basic Usage
This example makes a simple card with a heavy shadow around it.
`
<StdCard
    title={"My Title"}
    subtitle={"My Subtitle"}
    description={"Hello there"}
    elevation=10
    buttonPress={() => console.log("clicked button")} 
>
</StdCard>
`

### Button Functionality
Obviously any arrow function can be passed in. This simple example shows how to pass in the four types of function StdCard can accept.

Note that buttonPress is always required
`
<StdCard 
    buttonPress={() => console.log("clicked button")}
    buttonLongPress={() => console.log("held down button")} 
    cardPress={() => console.log("clicked card")}>  
    longCardPress={() => console.log("held down card")} 
>
</StdCard>
`