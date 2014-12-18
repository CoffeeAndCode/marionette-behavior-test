# Test Marionette Behavior with UI Events and `delegateEvents`

I found a bug with `delegateEvents` in Marionette when a `Marionette.Behavior`
has an event listener that uses the `eventName @ui.property` syntax. The app
will run fine, until `delegateEvents` is called after the `ui` hash transforms
to have `jQuery` methods for values instead of the original css selector strings.

## Installation

```
bower install
```

## Running the App

Open `index.html` in a web browser and open up the console. Everytime you click
the "Click Me" button, you should see a message in the console.

Once you click the "Call delegateEvents" button, the "Click Me" button will
no longer work.
