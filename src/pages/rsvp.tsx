// If you don't want to use TypeScript you can delete this file!
import * as React from "react"
import { PageProps, Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

type DataProps = {
  site: {
    buildTime: string
  }
}

const RSVP: React.FC<PageProps<DataProps>> = ({ data, path }) => (
  <Layout>
    <Seo title="Alecz and Jo 20201 - RSVP" />
    <h1>RSVP</h1>
    <p>
      Please fill the below form out for every member of your party (including
      children and +1s)
    </p>
    <form
      action="https://getform.io/f/5d736a35-7f44-4ba3-8fa8-59d852070147"
      method="POST"
      className="container"
    >
      <div className="input">
        <label>Name</label>
        <input type="text" name="name" required />
      </div>
      <div className="input">
        <label>E-mail</label>
        <input type="email" name="email" required />
      </div>
      <div className="input">
        <label>Phone number</label>
        <input type="tel" name="phone" required />
      </div>
      <div className="input checkbox">
        <label>Are you staying at the hotel?</label>
        <div className="radios">
          <label>Yes</label>
          <input type="radio" name="hotel" value="yes" />
          <label>No</label>
          <input type="radio" name="notel" value="no" />
        </div>
      </div>
      <div className="input">
        <label>Dinner choice (select one)</label>
        <select name="dinner">
          <option value="chicken">Chicken</option>
          <option value="steak">Steak</option>
          <option value="salmon">Salmon</option>
          <option value="veg">Vegetarian</option>
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  </Layout>
)

export default RSVP

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`
