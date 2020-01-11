import React from 'react'
// import {graphql} from 'gatsby'
import {Card, Button} from 'react-bootstrap'
import { graphql } from 'gatsby'

const Post = (props) => (
  <div className='p-3'>
    <Card>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title dangerouslySetInnerHTML={{__html:props.title}}/>
        {/* <Card.Title>{props.title}</Card.Title> */}
        <Card.Text dangerouslySetInnerHTML={{__html:props.excerpt}}/>
        {/* <Card.Text>{props.excerpt}</Card.Text> */}
        <Button variant="warning" href={props.readMore}>Read More ...</Button>
      </Card.Body>
    </Card>
  </div>
)

export default Post

export const query = graphql`
  query($slug: String!){
    markdownRemark(fields: {slug: {eq: $slug}}){
      html
      frontmatter{
        title
      }
    }
  }
`