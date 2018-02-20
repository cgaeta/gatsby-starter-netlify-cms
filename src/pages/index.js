import React from "react";
import Link from "gatsby-link";
import Script from "react-load-script";
import graphql from "graphql";

export default class IndexPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = ({target: {name, value}}) => {
    this.setState({[name]: value});
  }

  handleScriptLoad() {
    if (typeof window !== `undefined` && window.netlifyIdentity) {
      window.netlifyIdentity.on("init", user => {
        if (!user) {
          window.netlifyIdentity.on("login", () => {
            document.location.href = "/admin/";
          });
        }
      });
    }
    window.netlifyIdentity.init();
  }

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: encode({
        "form-name": "test",
        ...this.state
      })
    }).then(() => console.log("Success!"))
    .catch(err => console.log(err));

    e.preventDefault();
  }

  render() {

    return (
      <section className="section">
        <Script
          url="https://identity.netlify.com/v1/netlify-identity-widget.js"
          onLoad={() => this.handleScriptLoad()}
        />
        <div className="container">
          <div className="content">
            <form
              method="post"
              name="test"
              data-netlify="true"
              data-netlify-honeypot="bottrap"
              onSubmit={this.handleSubmit}
            >
              <label>Name: <input type="text" name="name" onChange={this.handleChange}/></label>
              <label>Email: <input type="email" name="email" onChange={this.handleChange}/></label>
              <label>Message: <textarea name="message" onChange={this.handleChange}/></label>
              <input type="text" name="bottrap" style={{display: "none"}} />
              <button type="submit">Go</button>
            </form>
          </div>
        </div>
      </section>
    );
  }
}
