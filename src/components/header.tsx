import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

type HeaderProps = {
  siteTitle: string
}

const Header = ({ siteTitle }: HeaderProps) => (
  <header
    style={{
      marginBottom: `1.45rem`,
      display: "flex",
      width: "100%",
    }}
  >
    <div className="base">
      <div
        style={{
          margin: `0 auto`,
          width: 768,
          padding: `1.45rem 1.0875rem`,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "flex-end",
        }}
      >
        <h1 style={{ margin: 0, fontSize: "36px" }}>
          <Link
            to="/"
            style={{
              color: `gold`,
              textDecoration: `none`,
              fontFamily: "Bad Script",
            }}
          >
            {siteTitle}
          </Link>
        </h1>
        <h2 style={{ margin: 0, fontSize: "20px" }}>
          <Link
            to="/rsvp"
            style={{
              color: `gold`,
              textDecoration: `none`,
              fontFamily: "Bad Script",
            }}
          >
            RSVP
          </Link>
        </h2>
        <h2 style={{ margin: 0, fontSize: "20px" }}>
          <Link
            to="/story"
            style={{
              color: `gold`,
              textDecoration: `none`,
              fontFamily: "Bad Script",
            }}
          >
            Our story
          </Link>
        </h2>
        <h2 style={{ margin: 0, fontSize: "20px" }}>
          <Link
            to="/venue"
            style={{
              color: `gold`,
              textDecoration: `none`,
              fontFamily: "Bad Script",
            }}
          >
            Venue
          </Link>
        </h2>
        <h2 style={{ margin: 0, fontSize: "20px" }}>
          <Link
            to="/menu"
            style={{
              color: `gold`,
              textDecoration: `none`,
              fontFamily: "Bad Script",
            }}
          >
            Menu
          </Link>
        </h2>
      </div>
    </div>
    <div className="wide">
      <div
        style={{
          margin: `0 auto`,
          width: 960,
          padding: `1.45rem 1.0875rem`,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "flex-end",
        }}
      >
        <h2 style={{ margin: 0 }}>
          <Link
            to="/rsvp"
            style={{
              color: `gold`,
              textDecoration: `none`,
              fontFamily: "Bad Script",
            }}
          >
            RSVP
          </Link>
        </h2>
        <h2 style={{ margin: 0 }}>
          <Link
            to="/story"
            style={{
              color: `gold`,
              textDecoration: `none`,
              fontFamily: "Bad Script",
            }}
          >
            Our story
          </Link>
        </h2>
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `gold`,
              textDecoration: `none`,
              fontFamily: "Bad Script",
            }}
          >
            {siteTitle}
          </Link>
        </h1>
        <h2 style={{ margin: 0 }}>
          <Link
            to="/venue"
            style={{
              color: `gold`,
              textDecoration: `none`,
              fontFamily: "Bad Script",
            }}
          >
            Venue
          </Link>
        </h2>
        <h2 style={{ margin: 0 }}>
          <Link
            to="/menu"
            style={{
              color: `gold`,
              textDecoration: `none`,
              fontFamily: "Bad Script",
            }}
          >
            Menu
          </Link>
        </h2>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
