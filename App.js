import React from 'react'
import ReactDOM from 'react-dom'
//react creates a virtual Document Object Model (DOM), which is a Application Programming Interface (API) for HTML and XML docs. 
//React creates a virtual DOM in memory, where is does all the necessary manipulating, before making the changes in the browser DOM.


class App extends React.Component {
//a class is a type of function, but instead of using the keyword function to start it, we use the keyword class
//and the properties are assigned inside a constructor() method. 



    state = { }; 
//state is an object that can contain as many elements as we like.
//we refer to the state object anywhere in the component by using the following syntax.
//this.state.propertyname 
//to change the value in the state object, we use the this.setState() method. 
//when a value in the state object changes, the component will re-render, 
//this means that the output will change according to the new values(s)

};


//DO IT ALL IN APP FOLDER! 




export default App;