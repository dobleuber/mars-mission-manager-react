import React from 'react'

import PropTypes from 'prop-types'

import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'

import './styles.scss'

function WeatherChart (props) {
  const {data} = props;

  if (!data.length) {
    return null
  }

  return (
    <LineChart
      className="weather-chart"
      width={300}
      height={200}
      data={data}
      margin={{top: 5, right: 5, left: 5, bottom: 5}}
    >
      <CartesianGrid strokeDasharray="3 3"/>
      <XAxis dataKey="time"/>
      <YAxis yAxisId="left" domain={['dataMin - 50', 'dataMax + 50']} />
      <YAxis yAxisId="right" domain={['dataMin - 50', 'dataMax + 50']} orientation="right" />
      <Tooltip />
      <Legend />
      <Line yAxisId="left" type="monotone" dataKey="temp" stroke="#8884d8" activeDot={{r: 8}}/>
      <Line yAxisId="right" type="monotone" dataKey="pressure" stroke="#82ca9d" />
    </LineChart>
  )
}

WeatherChart.props = {
  data: PropTypes.arrayOf(PropTypes.shape({
    humidity: PropTypes.number,
    temp: PropTypes.number,
    time: PropTypes.number,
  }))
}

export default WeatherChart;