import React, { Component } from "react";

class MovieForm extends Component {
  render() {
    return (
      <>
        <h1>MovieForm {this.props.match.params.id}</h1>
        <button
          className="btn btn-primary"
          onClick={() => this.props.history.push("/movies")}
        >
          Save
        </button>
      </>
    );
  }
}

export default MovieForm;
