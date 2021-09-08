import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div>
      <div className="text container">
        <h1>Welcome, weary traveller!</h1>
        <p>
          As you may have heard Jo Wolff is getting married to Alecz Rose! We've
          built this site as a one-stop shop for all related wedding
          information.
        </p>
        <p>
          Please RSVP and let us know which delicious dinner you'll be having,
          or check out the venue (and reserve a room!) at the links above.
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
          As you may know, Alecz and Jo are pretty spooky.If you've got fancy
          goth gear? Wear it! Otherwise, come fancy (suits, ties, dress shirts,
          slacks, dresses, cultist hoods).
        </p>
      </div>
    </div>
  </Layout>
)

export default IndexPage
