import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";
import Pic from "./AllenSu.JPG";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell className="resume-left-col" col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src={Pic}
                alt="avatar"
                style={{ height: "250px", borderRadius: "125px" }}
              />
            </div>
            <h2 style={{ textAlign: "center" }}>Allen Su</h2>
            <hr style={{ borderTop: "3px solid #182db4", width: "100%" }} />
            <p>
              Hello, my name is Allen and I'm currently pursuing a Computer
              Science degree at the University of Washington. I'm hardworking
              and a fast learner. Right now, I'm seeking professional experience
              in software development through an internship.
            </p>
            <hr style={{ borderTop: "3px solid #182db4", width: "100%" }} />
            <h5>Phone</h5>
            <p>(425) 362-6490</p>
            <h5>Email</h5>
            <p>suallen@uw.edu</p>
            <h5>LinkedIn</h5>
            <p>linkedin.com/in/allen-su </p>
            <hr style={{ borderTop: "3px solid #182db4", width: "100%" }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
              startYear={2019}
              endYear={2022}
              schoolName="University of Washington | B.S. Computer Science"
              schoolDescription="•Relevant Courses: Computer Programming II, Foundations of Computing I, The Hardware/Software Interface, Calculus with Analytic Geometry III "
            />
            <h2>Experience</h2>
            <Experience
              startYear={2018}
              endYear={2019}
              jobName="Visual Vocal | Software Developer Intern"
              jobDescription1="• Implemented a “Server Offline” landing page and notification banner using React for the Visual Vocal Applet."
              jobDescription2="• Tested the Visual Vocal SDK and researched potential solutions to improve VR whiteboard trails in Unity."
              jobDescription3="• Managed and wrote SDK, App, and VR Camera documentation on the Visual Vocal support website. "
            />
            <Experience
              startYear={2018}
              endYear={2019}
              jobName="SainStore | Marketing Intern"
              jobDescription1="•	Managed SEO for multiple Google AdWords campaigns, and improved CTR and Conversions by over 40%."
              jobDescription2="• Wrote and edited product descriptions and user manuals for products ranging from 3D printers to apparel. Brands included TOSOT, ORORO, SainSmart, Lagute, Airthereal, A11N, Swonder etc."
              jobDescription3="• Consulted and worked on marketing campaigns, giveaways, and promotions while at Guangzhou headquarters during the summer of 2019."
            />
            <hr style={{ borderTop: "3px solid #182db4" }} />
            <h2>Skills</h2>
            <Skills skill="Java" progress={70} />
            <Skills skill="Unity" progress={25} />
            <Skills skill="React" progress={25} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
