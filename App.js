import React from "react";
import ReactDOM from "react-dom";

const Heading = React.createElement(
    "h1",
    {
        id :"title"
    },
    "Hello world"
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 Heading
); 