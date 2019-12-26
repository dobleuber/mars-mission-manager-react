import React from 'react'

import {getWindData} from '../../utils/weather-data'

import './styles.scss'

class WindIndicator extends React.Component {
  state = {
    data : getWindData()
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        data: getWindData()
      })
    }, 100)
  }

  render () {
    const {data} = this.state;
    const last = data.slice(-1).pop();

    return (
      <div className="wind-indicator valign-wrapper">
        <p className="flow-text">{last.speed} MPH</p>
        <svg width="200" height="200">
          <defs>
            <marker id="arrowhead" markerWidth="5" markerHeight="5"
                    refX="0" refY="2.5" orient="auto">
              <polygon points="0 0, 5 2.5, 0 5" fill="#1b5e20 " />
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
            x1="0"
            y1="0"
            x2="50"
            y2="0"
            stroke="#1b5e20"
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

  componentWillUnmount() {
    clearInterval(this.timer)
  }
}

export default WindIndicator