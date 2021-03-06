import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout.js'
import ProjectTile from '../components/ProjectTile.js'

const ProjectPage = ({ data }) => (
  <Layout>
  <section className="section">
    <div className="container">
      <h1 className="has-text-weight-bold is-size-1 has-text-primary">Explore Projects</h1>
      <hr className="horizontal-rule" />
      <br></br>
      <div>
        <div className="columns is-multiline is-centered">
          {data.allStrapiProject.edges.map(document => (
              <div key={document.node.id} className="column is-5-tablet is-4-desktop is-3-widescreen">
                  <ProjectTile data={document.node}></ProjectTile>
              </div>
          ))}
        </div>
      </div>
    </div>
  </section>
  </Layout>
)

export default ProjectPage

export const pageQuery = graphql`
  query ProjectPage {
    allStrapiProject {
      edges {
        node {
          id
          project_name
          project_description
          short_description
          sponsor_name
          project_image {
             childImageSharp {
                fluid(maxWidth:300, maxHeight:200, quality:90, toFormat:JPG) {
                   ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
