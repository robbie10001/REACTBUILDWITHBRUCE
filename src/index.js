import React from "react";
import ReactDOM from "react-dom";

const App = function() {
    const buttonText = "Click me";
    return (
    <div>
        <div>
            <section>
                <label className ="label" htmlFor="name">Username:</label>
            </section>
                <input id="name" type="text" />
            <section> 
                <button>
                    {buttonText}
                </button> 
            </section>
        </div>
        <div>
            <section>
                <lable className ="label" htmlFor="name">Email:</lable>
            </section>
            <section>
                <input id="email" type="text" />
            </section>
            <section>
                <button>
                    {buttonText}
                </button>
            </section>
        </div>
            </div>
    );
};

//PUT ALL OF THESE COMPONENTS WITHIN A SINGLE COMPONENT. 

ReactDOM.render(
    <App />,
    document.querySelector("#root")
    );