import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Alecz and Jo 20201 - Home" />
    <div>
      <div className="text container">
        <h1>I will not let you go into the unknown alone</h1>
        <p>
          In the velvet darkness of the blackest night two souls discovered
          light in the distance: each other. We invite you to celebrate their
          union, their love, and the life that courses through their veins.
        </p>
        <p>
          Please <Link to="/rsvp">RSVP</Link> and let us know which dinner
          you'll be having, or check out the venue (and reserve a room!) at the
          links above. Children and +1s are welcome, RSVP them as well to
          include them in our final headcdount.
        </p>
        <h2>Details</h2>
        <p className="flush-bottom">
          <strong>When</strong>:
        </p>
        <p>October 16th, 2021 @ 4PM</p>
        <p className="flush-bottom">
          <strong>Where</strong>:
        </p>
        <p className="flush-bottom">The Lotte Hotel</p>
        <p className="flush-bottom">809 5th Ave</p>
        <p>Seattle, WA 98104</p>
        <p className="flush-bottom">
          <strong>Dress code</strong>:
        </p>
        <p>
          Black tie, fancy attire. Come dressed in your finest and celebrate.
        </p>
      </div>
    </div>
  </Layout>
)

export default IndexPage
