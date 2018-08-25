"use strict";

console.log("app.js is connected");

var appObject = {
  title: '(k)Nowledge',
  subtitle: 'Step out of the dark.',
  options: ['One', 'Two']
};

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    appObject.title
  ),
  appObject && React.createElement(
    "p",
    null,
    appObject.subtitle
  ),
  appObject.options.length > 0 ? "Here are your options" : "No options exist.",
  React.createElement(
    "ol",
    null,
    React.createElement(
      "li",
      null,
      "item one"
    ),
    React.createElement(
      "li",
      null,
      "item two"
    )
  )
);

var user = {
  name: 'Brayden',
  age: 35,
  location: 'Greater SLC Area'
};

function getLocation(location) {
  if (location) {
    return React.createElement(
      "p",
      null,
      "Location: ",
      location
    );
  }
}
var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    user.name ? user.name : 'Anonymous'
  ),
  user.age >= 18 && React.createElement(
    "p",
    null,
    "Age: ",
    user.age
  ),
  getLocation(user.location)
);
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot); //render takes in two arguments, the first being the element you'd like to render, and the second being where in the DOM you would like it to render.
