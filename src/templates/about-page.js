import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout.js'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage.js'
import SectionHeader from '../components/SectionHeader';

import PreviewCompatibleHero from '../components/PreviewCompatibleHero'
const AboutPageTemplate = ({data}) => (
  <Layout>

    <section className="hero is-primary is-medium">
              <PreviewCompatibleHero
                    imageInfo={data.strapiAboutpage.image}
                    className="hero-body"
                    title={data.strapiAboutpage.title}
              />
            </section>
    
      <div className="container">
        <div className="columns">
          <div className="column is-12 is-offset-0">
            <div className="section">

              <h4 className="is-size-3"
                style={{width: '100%', paddingBottom: '5%', textAlign: 'center'}}>
                {data.strapiAboutpage.mission}
              </h4>
              <SectionHeader SectionHeader ={data.strapiAboutpage.headingAboutTechConnect}/>
              <div style={{width: '80%', marginLeft: '10%', paddingBottom: '5%'}}>
                <div className="columns is-centered is-vcentered">
                  <div className="column is-7">
                    <p className="is-size-5">{data.strapiAboutpage.aboutTechConnect}</p>
                  </div>
                  <div className="column is-5">
                    <PreviewCompatibleImage imageInfo={data.strapiAboutpage.image2} />
                  </div>
                </div>
              </div>
              <SectionHeader SectionHeader ={data.strapiAboutpage.headingAboutMaf} style={{paddingTop: '5%'}}/>
              <div style={{width: '80%', marginLeft: '10%'}}>
                <div className="columns is-centered is-vcentered">
                  <div className="column is-5">
                    <PreviewCompatibleImage imageInfo={data.strapiAboutpage.image3} />
                  </div>
                  <div className="column is-7">
                    <p className="is-size-5">{data.strapiAboutpage.aboutMaf}</p>
                  </div>
                </div>
            </div>
            </div>
            <div className="full-width-image-container" style={{height: '40em'}}>
              <div>
                <div className="columns is-centered is v-centered has-text-centered is-multiline">
                  <div className="column is-12">
                    <h2 className="is-size-3 has-text-weight-normal" 
                      style={{color: 'white', fontStyle: 'italic', paddingLeft: '10%', paddingRight: '10%'}}>
                      {data.strapiAboutpage.quote}
                    </h2>
                  </div>
                  <div className="column is-12">
                    <Link to="/create-project">
                      <button className="button is-primary-invert is-large">
                        {data.strapiAboutpage.button}
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )

export default AboutPageTemplate

export const PageQuery = graphql`
query AboutPageTemplate ($id: String!) {
   strapiAboutpage (id: {eq: $id}) {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100, toFormat:JPG) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        mission
        headingAboutTechConnect
        aboutTechConnect
        image2 {
            childImageSharp {
              fluid(maxWidth: 400, quality: 90, toFormat:JPG) {
                ...GatsbyImageSharpFluid
              }
            }
          }  
        headingAboutMaf
        aboutMaf
        image3 {
            childImageSharp {
              fluid(maxWidth: 400, quality: 90, toFormat:JPG) {
                ...GatsbyImageSharpFluid
              }
            }
          }  
        quote
        button
      }
    }
`
