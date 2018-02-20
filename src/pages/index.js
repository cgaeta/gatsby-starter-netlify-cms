import React from "react";
import Link from "gatsby-link";
import Script from "react-load-script";
import graphql from "graphql";

function encode(data) {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");
}

export default class IndexPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = (e) => {
    let {target} = e;
    let {name, value} = target;
    console.log('event: ', e, target, name, value);
    this.setState({[name]: value});
    console.log('state: ', this.state, name, value);
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

    console.log("sending form", ...this.state);
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
              name="test2"
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
