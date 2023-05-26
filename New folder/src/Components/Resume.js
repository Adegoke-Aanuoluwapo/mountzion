import React, { Component } from "react";
import Slide from "react-reveal";
//import payment from "./payment.js"


class Resume extends Component {
  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    if (!this.props.data) return null;

    const skillmessage = this.props.data.skillmessage;
    const programmes = this.props.data.programmes.map(function (programmes) {
      return (
        <div key={programmes.school}>
          <h3>{programmes.school}</h3>
          <p className="info">
            {programmes.degree} <span>&bull;</span>
            <em className="date">{programmes.graduated}</em>
          </p>
          <p>{programmes.description}</p>
        </div>
      );
    });

    const work = this.props.data.work.map(function (work) {
      return (
        <div key={work.company}>
          <h3>{work.company}</h3>
          <p className="info">
            {work.title}
            <span>&bull;</span> <em className="date">{work.years}</em>
          </p>
          <p>{work.description}</p>
        </div>
      );
    });

    const skills = this.props.data.skills.map((skills) => {
      const backgroundColor = this.getRandomColor();
      const className = "bar-expand " + skills.name.toLowerCase();
      const width = skills.level;

      return (
        <li key={skills.name}>
          <span style={{ width, backgroundColor }} className={className}></span>
          <em>{skills.name}</em>
        </li>
      );
    });

    return (
      <section id="resume">
        <Slide left duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Weekly Programmes</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">{programmes}</div>
                <p></p>
              </div>
            </div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Monthly Programmes</span>
              </h1>
            </div>

            <div className="nine columns main-col">{work}</div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row skill">
            <div className="three columns header-col">
              <h1>
                <span>Quarterly Programme</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <p>{skillmessage}</p>

              <div className="bars">
                <ul className="skills">{skills}</ul>
              </div>
            </div>
          </div>
        </Slide>

        <div className="form" style={{ marginLeft: "400px" }}>
          <form id="paymentForm">
            <div class="form-group">
              <label for="email">Email Address</label>
              <input type="email" id="email-address" required />
            </div>
            <div class="form-group">
              <label for="amount">Amount</label>
              <input type="tel" id="amount" required />
            </div>
            <div class="form-group">
              <label for="first-name">First Name</label>
              <input type="text" id="first-name" />
            </div>
            <div class="form-group">
              <label for="last-name">Last Name</label>
              <input type="text" id="last-name" />
            </div>
            <div class="form-submit">
              <button type="submit" onclick="payWithPaystack()">
                {" "}
                Pay{" "}
              </button>
              
            </div>
          </form>
          
          

          <script src="https://js.paystack.co/v1/inline.js"></script>
          
        </div>
      </section>
    );
  }
}

export default Resume;
