/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { Parallax, Background } from "react-parallax"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Header from "./header"
import "./layout.css"

type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Parallax strength={400}>
      <Background className="custom-bg">
        <StaticImage
          src="../images/wedding-bg2.png"
          width={1800}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="Spooky bouquet"
          style={{ marginBottom: `1.45rem` }}
        />
      </Background>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
      </div>
    </Parallax>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
