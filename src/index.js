import React from "react";
import ReactDOM from "react-dom";

//REACT COMPONENTS 
//Components are indepeent and resuable bits of code. The serve the same purpose as functions in plain Javascript,
//however, they work in isolation and returns HTML via a render function. 

//Components come in two types, class components and function components. 


//With JSX, we can write expressions inside curly braces {}. 
//the expression can be a react vairable, or property, or any other valid JavaScript expression.L0
//JSX will execute the expression and return the result. 

//CREATE  A CLASS COMPONENT 

//When creating a React component, the component's name must start with an upper case letter. 
//The component has to include the extend React.Component statement, 
//this statement creates an inheritance to React.Component, and gives your compoent access to React.Components' functions.
//The component also requires a render() method, this method returns HTML.


const myelement = (
    <table>
      <tr>
        <th>Name</th>
      </tr>
      <tr>
        <td>John</td>
      </tr>
      <tr>
        <td>Elsa</td>
      </tr>
    </table>
  );
//PUT ALL OF THESE COMPONENTS WITHIN A SINGLE COMPONENT. 

ReactDOM.render(myelement, 
//React renders HTML to the page by using the the ReactDOM.render 
//The function takes two arguments, HTML code and an HTML element. 
//The purpose of the function is to display the specified HTML code instide the specified HTNL element.
    
    document.querySelector("#root")
    
    );