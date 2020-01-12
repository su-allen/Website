import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";
import Pic from "./AllenSu.JPG";

class About extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell className="about-left" col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src={Pic}
                alt="avatar"
                style={{ height: "250px", borderRadius: "175px" }}
              />
            </div>
            <p></p>
          </Cell>
          <Cell className="about-right" col={7}>
            <p>
              I have a background in organizing and planning community events,
              as well as in software development and marketing. In high school,
              I was a manager for Science for Community (SFC), a student run
              non-profit for three years. Every season, we hosted an event
              called Buzz Bowl, a math and science buzzer competition for
              elementary and middle school students. From our first event of 30
              or so competitors, our largest event had over 150 students. I was
              responsible for proctoring events, marketing, writing questions
              for the competition, and leading volunteer training meetings. In
              total, SFC has raised and donated over $10,000 to the Bellevue
              Schools Foundation to aid underfunded STEM programs in the
              district. Recently, I have also joined the Chinese Student
              Association officer team at UW to plan cultural events and
              activities.
            </p>

            <p>
              Through my involvement in these organizations, I have improved my
              time management, communication, and teamwork skills. I’ve learned
              how to delegate tasks, worked on public speaking, and have gained
              an appreciation of the time and commitment it takes to plan a
              large event. Besides the set of soft skills I can bring, I also
              have experience in web development and marketing. Last year, I had
              the opportunity to intern at Visual Vocal, a Seattle based VR
              startup where I implemented a “Server Offline” landing page and
              notification banner using react for the Visual Vocal Applet. I
              also had experience last year working in marketing for SainStore,
              where I was tasked with improving SEO and created product
              descriptions and user manuals for a variety of products. I also
              got the chance to sit in and give my opinions for marketing
              campaigns and promotional events for the company. From these
              roles, I have acquired a diverse perspective and a wide range of
              skills that I will bring to any project I am a part of.
            </p>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default About;
