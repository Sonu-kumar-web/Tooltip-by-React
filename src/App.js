import "./Components/tooltip.css";
import React from "react";
import Tooltip from "./Components/Tooltip";

class App extends React.Component {
   render() {
      return (
         <div className="container">
            <Tooltip position={top} />
         </div>
      );
   }
}

export default App;

// Style for top position
const top = {
   width: 800,
   height: 250,
   textAlign: "center",
   fontSize: 30,
   marginLeft: -50,
};
