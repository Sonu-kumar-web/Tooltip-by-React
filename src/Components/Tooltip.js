import "./tooltip.css";
import React from "react";
import Quote from "inspirational-quotes";

class Tooltip extends React.Component {
   state = { backgroundColor: "cyan", quotes: "" };

   // When pointer is hover on button
   onMouseEnter = () => {
      const quote = Quote.getRandomQuote();
      this.setState({ backgroundColor: "#0693E3", quotes: quote });
   };

   // When pointer is left the button
   onMouseLeave = () => {
      this.setState({ backgroundColor: "cyan", quotes: "" });
   };

   render() {
      return (
         <div className="tooltip-container">
            <div style={this.props.position}>
               <p>{this.state.quotes}</p>
            </div>
            <div>
               <button
                  className="button"
                  onMouseEnter={() => this.onMouseEnter()}
                  onMouseLeave={() => this.onMouseLeave()}
                  style={{ backgroundColor: `${this.state.backgroundColor}` }}
               >
                  <h1>Inspirational Quotes</h1>
               </button>
            </div>
         </div>
      );
   }
}

export default Tooltip;
