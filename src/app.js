"use strict";

console.log("app.js is connected");

const appObject = {
  title: '(k)Nowledge',
  subtitle: 'Step out of the dark.',
  options: ['One', 'Two']
}

const template = (
  <div>
    <h1>{appObject.title}</h1>
    {appObject  && <p>{appObject.subtitle}</p>}
    {(appObject.options.length > 0) ? "Here are your options" : "No options exist."}
    <ol>
      <li>item one</li>
      <li>item two</li>
    </ol>
  </div>
);

let user = {
  name: 'Brayden',
  age: 35,
  location: 'Greater SLC Area'
}

function getLocation(location){
  if (location){
    return <p>Location: {location}</p>
  }
}
const templateTwo = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {(user.age >= 18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
)
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot); //render takes in two arguments, the first being the element you'd like to render, and the second being where in the DOM you would like it to render.
