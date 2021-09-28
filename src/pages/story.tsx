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
          Alecz and Jo first met, separated by miles and boundless oceans,
          illuminated by the moon. Jo was in Amsterdam, Alecz in Washington.
          Fate brought them together.
        </p>
        <p>
          They began talking to one another and have't stopped since, connected
          at the heart by the gossamer strands of love.
        </p>
        <p>
          They now reside in Seattle with their partner, Jasper, and two
          beautiful children.
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
