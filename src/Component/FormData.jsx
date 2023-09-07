import React, { Component } from "react";
import "./Formpage.css";

export default class FormData extends Component {
  constructor(props) {
    console.log(props.value)
    super(props);
  }

  render() {
    return (
      <div>
        <div className="parent-conatiner">
          {this.props.value.map((e, i) => {
            return (
              // <>
              <div key={i} className="box">
                <p>
                  Name of student : {e.name}
                  || Department : {e.department} || Rating :{e.rating}
                </p>
              </div>
              // </>
            );
          })}
        </div>
        <button onClick={this.props.redirect} className="back-btn">
          Go Back
        </button>
      </div>
    );
  }
}
