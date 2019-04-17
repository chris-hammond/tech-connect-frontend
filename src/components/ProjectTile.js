import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import LinesEllipsis from 'react-lines-ellipsis'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage.js'

const ProjectTile = ({ data }) => (
  <div>
    <Link to={`/${data.id}`}><PreviewCompatibleImage imageInfo={data.project_image} /></Link>
    <h3 className="has-text-weight-bold is-size-5">
      <Link className="has-text-primary" style={{display:'inline-block'}} to={`/${data.id}`}>{data.project_name}</Link>
    </h3>
    <h4 className="has-text-weight-normal is-size-5 is-size-6">
      <Link className="has-text-primary" to={`/Profile_${data.profiles.id}`}><i>Sponsored by {data.profiles.profile_name}</i></Link>
    </h4>
    <Link className="has-text-primary" to={`/${data.id}`}><LinesEllipsis
      text={data.project_description}
      maxLine='3'
      ellipsis='...'
      trimRight
      basedOn='letters'
      /></Link>
  </div>
)

ProjectTile.propTypes = {
      id: PropTypes.number,
      project_name: PropTypes.object,
      project_description: PropTypes.string,
      project_goals: PropTypes.string,
      project_blurb: PropTypes.string,
}

export default ProjectTile
