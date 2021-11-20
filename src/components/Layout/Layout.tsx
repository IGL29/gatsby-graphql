import * as React from "react"
import "./Layout.css"

interface ILayout {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayout): JSX.Element => {
  return (
    <main>
      <div className={'container'}>
        {children}
      </div>
    </main>
  )
}

export default Layout
