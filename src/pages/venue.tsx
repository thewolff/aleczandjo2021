// If you don't want to use TypeScript you can delete this file!
import * as React from "react"
import { PageProps, Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

type DataProps = {
  site: {
    buildTime: string
  }
}

const Venue: React.FC<PageProps<DataProps>> = ({ data, path }) => (
  <Layout>
    <Seo title="Alecz and Jo 20201 - Venue" />
    <div className="venue">
      <div className="text container">
        <h1>Venue</h1>
        <p>
          The venue is the Sanctuary at the Lotte Hotel. It's an enchanting
          space that features a massive gothic organ, stained glass, and corners
          that grab onto the darkness and hold it.
        </p>
        <p className="flush-bottom">Lotte Hotel</p>
        <p className="flush-bottom">809 5th Ave</p>
        <p>Seattle, WA 98104</p>
        <a href="https://g.page/lotte-hotel-seattle?share">Get directions</a>
        <a href="#">Reserve a room</a>
      </div>
      <StaticImage
        src="../images/lotte.jpg"
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="Spooky bouquet"
        style={{ marginBottom: `1.45rem`, marginLeft: "16px", width: "60%" }}
      />
    </div>
  </Layout>
)

export default Venue

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`
