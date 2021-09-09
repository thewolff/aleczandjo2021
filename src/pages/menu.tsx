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

const Menu: React.FC<PageProps<DataProps>> = ({ data, path }) => (
  <Layout>
    <Seo title="Using TypeScript" />
    <div className="menu">
      <div className="text container">
        <h1>Menu</h1>
        <p>
          Good news! We've personally tried everything here and can confirm it
          is all amazing! Here's what's in store:
        </p>
        <h2>Soups</h2>
        <p className="flush-bottom">
          <strong>Heirloom Squash Soup GF VG</strong>
        </p>
        <p>Cippolini Onion Confit, Fine Herbs, Pistou</p>
        <h2>Salads</h2>
        <p className="flush-bottom">
          <strong>Organic Baby Greens GF</strong>
        </p>
        <p>
          Fried Brussel Sprouts, Compressed Apple, Aged Cheddar, Pancetta
          Dressing
        </p>
        <h2>Entrees</h2>
        <p className="flush-bottom">
          <strong>King Salmon GF</strong>
        </p>
        <p>
          Roasted Heirloom Carrots, Pasrnip Confit, Hazelnut Dukkah, Bearnaise
          Espuma
        </p>
        <p className="flush-bottom">
          <strong>Organic Chicken Breast GF</strong>
        </p>
        <p>Celery Root, Parisian Gnocchi, Brussels Sprouts, Black Truffle</p>
        <p className="flush-bottom">
          <strong>Beef Tenderloin GF</strong>
        </p>
        <p>Celery Root, King Trumpet, Fried Artichoke, Sunchoke, Salsa Verde</p>
        <p className="flush-bottom">
          <strong>Vegan Option</strong>
        </p>
        <p>Available upon request</p>
        <h2>Dessert</h2>
        <p className="flush-bottom">
          <strong>Lemon drop cake</strong>
        </p>
        <p className="flush-bottom">
          <strong>Zephyr Gateaux cupcakes</strong>
        </p>
        <p className="flush-bottom">
          <strong>Dessert bar goodies</strong>
        </p>
      </div>
    </div>
  </Layout>
)

export default Menu

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`
