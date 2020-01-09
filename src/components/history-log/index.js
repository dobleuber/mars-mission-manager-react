import React from 'react'

const HistoryLog = (props) => {
  return (
    <div className="history-log">
      <div className="row">
        <div className="col s8">Timestamp</div>
        <div className="col s4">
          View
          <a
            className="waves-effect waves-light"
            onClick={props.setCurrentTimeStamp(null)}
          >
            <i className="tiny material-icons">clear</i>
          </a>
        </div>
      </div>
      {
        props.data.map((data) =>
          <HistoryLogDataRow
            currentHistoryRowData={props.currentHistoryRowData}
            key={data.date}
            setCurrentTimeStamp={props.setCurrentTimeStamp}
            {...data}
          />
        )
      }
    </div>
  )
}

const HistoryLogDataRow = (props) => {
  const {currentHistoryRowData, date} = props;
  let buttonClass = 'waves-effect waves-light btn'
  if (currentHistoryRowData && currentHistoryRowData.date === date) {
    buttonClass += ' red'
  }
  return (
    <div className="data-row row">
      <div className="col s8">{date}</div>
      <div className="col s4">
        <a
          onClick={props.setCurrentTimeStamp(date)}
          className={buttonClass}
        >
          View
        </a>
      </div>
    </div>
  )
}

export default HistoryLog