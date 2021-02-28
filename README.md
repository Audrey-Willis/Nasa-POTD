NASA'S PHOTO OF THE DAY

This site was created using create react app. It started as a boot-camp 
project with Lambda school. Initially, We were taught to use class 
components in the building process. I went back to refactor the code into 
functional components as well as to give it a home page, a styling revamp, 
and responsiveness.

I used the APOD api located at https://api.nasa.gov/

The page was styled using styled-components

COMPONENTS: App.js - I used this component to store my Router information. 
I set Routes to home and the photo of the day page

Header.js -  I put the page title, the Nav component, and a quote.

Nav.js - Heres where I placed the Links that I set up Routes to in App.js

POTD-Component - This is where I made the api request using Axios. Then, I 
used the date keyword from the api so that I could add a date picker that 
would change the image if the date changed(with an event handler).

POTDContainer - I render all the needed information I pulled from the api 
on here.
PROGRAMS USED:

React
Axios
Styled-Components
React-Router-Dom(Router, Route, Link)
