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

const Story: React.FC<PageProps<DataProps>> = ({ data, path }) => (
  <Layout>
    <Seo title="Alecz and Jo 20201 - Our story" />
    <div className="story">
      <div className="text container">
        <h1>Our story</h1>
        <p>
          Alecz and Jo met in an unconventional manner, to say the least. Jo was
          in a houseboat in Amsterdam, several thousand miles away from Alecz
          who was at home in Washington.
        </p>
        <p>
          They began by discussing Batman, (of which Jo still maintains Kevin
          Conroy is the ultimate bats), and really haven't stopped texting
          since. After an extremely nervous lunch at Japonessa they've been
          inseparable.
        </p>
        <p>
          They now reside in Seattle with their partner, Jasper, two beautiful
          children, and three problematic cats.
        </p>
      </div>
    </div>
  </Layout>
)

export default Story

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`
