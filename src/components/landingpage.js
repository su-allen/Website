import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Pic from "./AllenSu.JPG";

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src={Pic}
              alt="avatar"
              style={{
                marginTop: "50px",
                height: "350px",
                borderRadius: "175px"
              }}
            />

            <div className="banner-text">
              <h1>Allen Su</h1>
              <hr />
              <h4> Computer Science Student at the University of Washington</h4>
              <p>
                Prior experiance with: Java | Unity | JavaScript | React |
                Python | C | Html | Css | Sass | Git
              </p>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
