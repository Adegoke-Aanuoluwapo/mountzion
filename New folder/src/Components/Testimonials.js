import React, { Component } from "react";

class Testimonials extends Component {
  render() {
    if (!this.props.data) return null;

    const testimonials = this.props.data.testimonials.map(function (
      testimonials
    ) {
      return (
        <li key={testimonials.user}>
          <blockquote>
            <p>{testimonials.text}</p>
            <cite>{testimonials.user}</cite>
          </blockquote>
        </li>
      );
    });

    return (
      <section id="testimonials">
        <div className="text-container">
          <div className="row">
            <div className="two columns header-col">
              <h1>
                <span>Client Testimonials</span>
              </h1>
            </div>

            <div className="ten columns flex-container">
              <ul className="slides">{testimonials}</ul>
            </div>
          </div>
        </div>
        <div>
          <label htmlFor="fullnames">Fullnames</label>
          <input type="text" name="name" id="fullnames" />
          <label htmlFor="phone">Phone</label>
          <input type="tel" name="phone" id="phone" />
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
          <label htmlFor="sex">Sex</label>
          <select>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <label htmlFor="position">Position</label>
          <select>
            <option value="member">Member</option>
            <option value="worker">Worker</option>
          </select>
          <label htmlFor="name">State</label>
          <select>
            <option value="abuja">Abuja</option>
            <option value="lagos">Lagos</option>
            <option value="ondo">Ondo</option>
          </select>
          <input type="button" name="submit" value="SUBMIT">
            Submit
          </input>
        </div>
      </section>
    );
  }
}

export default Testimonials;
