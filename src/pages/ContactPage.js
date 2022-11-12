import React from "react";
import { Prompt } from "react-router-dom";
import "../styles/ContactPage.css"

class ContactPAge extends React.Component {
  state = {
    value: "",
    isEmpty: true,

  }

  handleChange = (e) => {
    if (e.target.value.length > 0) {
      this.setState({
        value: e.target.value,
        isEmpty: false
      })
    } else {
      this.setState({
        value: e.target.value,
        isEmpty: true
      })
    }

  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({
      value: "",
      isEmpty: true,
    })

  }

  render() {
    return (
      <div className="contact">
        <h3>Write to us!</h3>
        <form className="contact" onSubmit={this.handleSubmit}>
          <textarea value={this.state.value} onChange={this.handleChange} placeholder="Type text..."></textarea>
          <button>Send!</button>
        </form>
        <Prompt
          when={!this.state.isEmpty}
          message="You haven't finished submitting form. Are you sure you want to leave page?"
        />
      </div>
    );
  }
}

export default ContactPAge;