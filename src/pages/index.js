import React from "react";
import Link from "gatsby-link";
import Script from "react-load-script";
import graphql from "graphql";

export default class IndexPage extends React.Component {
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

  render() {

    return (
      <section className="section">
        <Script
          url="https://identity.netlify.com/v1/netlify-identity-widget.js"
          onLoad={() => this.handleScriptLoad()}
        />
        <div className="container">
          <div className="content">
            <form name="test" data-netlify="true" netlify-honeypot="confirmEmail">
              <label>Name: <input type="text" name="name" /></label>
              <input type="email" name="confirmEmail" style={{display: "none"}} />
              <input type="submit" value="Go" />
            </form>
          </div>
        </div>
      </section>
    );
  }
}
