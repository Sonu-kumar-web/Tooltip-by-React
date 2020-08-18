import "./tooltip.css";
import React from "react";
import Quote from "inspirational-quotes";

class Tooltip extends React.Component {
   state = { backgroundColor: "cyan", quotes: "", quoteDiv: "" };

   onMouseEnter = () => {
      const quote = Quote.getRandomQuote();
      this.setState({ backgroundColor: "red", quotes: quote });
   };

   onMouseLeave = () => {
      this.setState({ backgroundColor: "cyan" });
   };

   quoteDiv = () => {};

   render() {
      return (
         <div className="container">
            <div className="content">
               <p>{this.state.quotes}</p>
            </div>
            <div>
               <button
                  className="button"
                  onMouseEnter={() => this.onMouseEnter()}
                  onMouseLeave={() => this.onMouseLeave()}
                  style={{ backgroundColor: `${this.state.backgroundColor}` }}
               >
                  Button
               </button>
            </div>
         </div>
      );
   }
}

export default Tooltip;
