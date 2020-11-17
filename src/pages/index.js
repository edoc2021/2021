import React from "react"
import { navigate } from "gatsby"

class IndexPage extends React.Component {

  componentDidMount() {
    navigate("/EDOC2021");
  }

  render() {
    return null
  }
}


export default IndexPage

