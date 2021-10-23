import React from "react"
import Layout from "../components/layout/layout"
import { Container } from "react-bootstrap"
import { graphql } from "gatsby"
import { handleLogin, isLoggedIn } from "../services/auth"
import LayoutProgram from "../components/layout/layout_program"


class PaperVideos extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      password: "",
      isLoggedIn: false,
      message: ""
    }
  }

  componentDidMount() {
    isLoggedIn().then((res) => {
      this.setState({ isLoggedIn: res })
    })
  }

  _onKeyDown = (e) => {
    if (e.key === "Enter") {
      this._onLogin()
    }
  }

  _onLogin = () => {
    this.setState({ "message": "" })
    handleLogin({ password: this.state.password }).then(() => {
      isLoggedIn().then((res) => {
        this.setState({ isLoggedIn: res })
        if (!res) {
          this.setState({ message: "Wrong password!" })
        }
      })
    })
  }

  _onPasswordChange = (e) => {
    this.setState({ password: e.target.value })
  }

  render() {
    const post = this.props.data.post
    return (
      <LayoutProgram location={this.props.location}>
        <Container>
          <h1 style={{ color: "#2c4f90" }}>Paper presentation videos</h1>
          <hr />
          {
            this.state.isLoggedIn
              ? <div
                dangerouslySetInnerHTML={{
                  __html: post.html || ""
                }}
              />
              :
              <div className="card" style={{ padding: 16 }}>
                <label htmlFor="exampleInputEmail1"><h2>Enter Password to access</h2></label>
                <h4 style={{ color: "#ff8100" }}>{this.state.message}</h4>
                <input type="password" onKeyDown={this._onKeyDown} className="form-control" id="exampleInputEmail1"
                       onChange={this._onPasswordChange}
                       aria-describedby="emailHelp"
                       placeholder="Enter password" />
                <button style={{ marginTop: 16 }} onClick={this._onLogin} type="submit"
                        className="btn btn-outline-primary">Submit
                </button>
              </div>

          }
        </Container>
      </LayoutProgram>
    )
  }
}

export default PaperVideos

export const query = graphql`
  query {
    post: markdownRemark(frontmatter: {type: {eq: "video-list"}}) {
      #    post: markdownRemark(frontmatter: {type: {eq: "empty"}}) {
      id
      html
    }
  }
`
