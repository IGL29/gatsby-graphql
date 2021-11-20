import * as React from "react"
import PropTypes from "prop-types"
import "./Layout.css"

const Layout = ({ children }) => {
  return (
    <main>
      <div className={'container'}>
        {children}
      </div>
    </main>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
