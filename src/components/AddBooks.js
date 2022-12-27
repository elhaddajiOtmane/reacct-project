import React, {  useState } from "react";
import '../styling/AddBooks.css';

class AddBooks extends React.Component {
  state = {
    NameB: "",
    Author: "",
    Days: "",
    resume: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      NameB: "",
      Author: "",
      Days: "",
      resume: ""
    });
    fetch("http://localhost:3000/api/books", {
      method: "POST",
      body: JSON.stringify({
        NameB: this.state.NameB,
        Author: this.state.Author,
        Days: this.state.Days,
        resume: this.state.resume
      }),
      headers: {
        "Content-type": "application/json"
      }
    })
      .then(response => response.json())
      .then(json => console.log(json));
  };

  render() {
    return (
      <>
        <div className="form-box">
          <h4 className="form-step">  Your Bibliotequa  </h4>
          <form>
            <div className="field1">
              <label>The Book</label>
              <input
                value={this.state.NameB}
                placeholder="Nama of the Book"
                onChange={e => this.setState({ NameB: e.target.value })}
              />
              <label>The Author</label>
              <input
                value={this.state.Author}
                placeholder="Name of the Author"
                onChange={e => this.setState({ Author: e.target.value })}
              />
              <label>Review</label>
              <textarea
                value={this.state.Days}
                placeholder="Days"
                onChange={e => this.setState({ Days: e.target.value })}
              />
              <textarea
                value={this.state.resume}
                placeholder="Your resume"
                onChange={e => this.setState({ resume: e.target.value })}
              />
            </div>
            <button
              type="submit"
              id="submitBtn"
              onClick={this.handleSubmit}
              className="submitBtn"
            >
              Submit
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default AddBooks;
