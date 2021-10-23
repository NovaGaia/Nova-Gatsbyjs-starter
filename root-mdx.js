import React from "react"
import { MDXProvider } from "@mdx-js/react"

const Testing = ({ children }) => {
  return <div className="code">{children}</div>
}

const components = {
  // All the logic
}

export const wrapMDX = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>
}
