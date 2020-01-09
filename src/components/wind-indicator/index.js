import React from 'react'

import PropTypes from 'prop-types'

import './styles.scss'

function WindIndicator (props) {
  const {data} = props

  if(!data) {
    return null
  }

  const last = data

  return (
    <div className="wind-indicator valign-wrapper">
      <p className="flow-text">{last.speed} MPH</p>
      <svg width="200" height="200">
        <defs>
          <marker id="arrowhead" markerWidth="5" markerHeight="5"
                  refX="0" refY="2.5" orient="auto">
            <polygon
              className="text-primary"
              points="0 0, 5 2.5, 0 5"
              fill="#F44336"
            />
          </marker>
        </defs>
        <circle
          cy="100"
          cx="100"
          fill="#e3f2fd"
          r="98"
          stroke="#bbdefb"
          strokeWidth="1"
        />
        <line
          className="text-primary"
          id="arrow"
          x1="0"
          y1="0"
          x2="50"
          y2="0"
          stroke="#F44336"
          strokeWidth="4"
          markerEnd="url(#arrowhead)"
          style={{
            transform: `translate(100px, 100px) rotate(${last.deg}deg)`
          }}
        />
      </svg>
    </div>
  )
}

WindIndicator.propTypes = {
  data: PropTypes.shape({
    deg: PropTypes.number,
    speed: PropTypes.number,
    time: PropTypes.number,
  })
}

export default WindIndicator