import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Path = styled.path`
fill: ${props => props.fillColor};
fill-opacity:1;
stroke:#000000;
stroke-width:1px;
stroke-linecap:butt;
stroke-linejoin:miter;
stroke-opacity:1
`

class GigajoulesScale extends Component {
  static propTypes = {
    width: PropTypes.string,
  }

  static defaultProps = {
    width: '40em',
  }

  render() {
    return (
      <svg
        ref={element => (this.element = element)}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 385.96067 29.727949"
        width={this.props.width}
        preserveAspectRatio="xMinYMin">
        <Path
          fillColor="#e7ff0f"
          d="m 144.63639,0.5 h 42.20621 l -12.4,14.864596 12.4,13.863353 H 144.55937 L 130.69602,15.518633 Z"
        />
        <Path
          fillColor="#73fe02"
          d="M 94.636395,0.5 H 136.8426 l -12.4,14.864596 12.4,13.863353 H 94.559375 L 80.696025,15.518633 Z"
        />
        <Path
          fillColor="#f8cd21"
          d="m 194.63639,0.5 h 42.20622 L 224.4426,15.364596 236.84261,29.227949 H 194.55937 L 180.69602,15.518633 Z"
        />
        <Path
          fillColor="#fe8d22"
          d="m 242.6364,0.5 h 42.20621 l -12.4,14.864596 12.4,13.863353 H 242.55938 L 228.69603,15.518633 Z"
        />
        <Path
          fillColor="#ff330e"
          d="m 292.6364,0.5 h 42.20621 l -12.4,14.864596 12.4,13.863353 H 292.55938 L 278.69603,15.518633 Z"
        />
        <Path
          fillColor="#fd0308"
          d="m 342.6364,0.5 h 42.20621 l -12.4,14.864596 12.4,13.863353 H 342.55938 L 328.69603,15.518633 Z"
        />
        <Path
          fillColor="#40fd00"
          d="m 44.636395,0.5 h 42.20621 l -12.4,14.864596 12.4,13.863353 H 44.559375 L 30.696025,15.518633 Z"
        />
        <Path
          fillColor="#eaf0f0"
          d="m 14.636395,0.5 h 22.20621 l -12.4,14.864596 12.4,13.863353 H 14.559375 L 0.69602455,15.518633 Z"
        />
      </svg>
    )
  }
}

export default GigajoulesScale
