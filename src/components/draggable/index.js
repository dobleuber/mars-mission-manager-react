import React from 'react'
import './styles.scss'

export default (props) => {
  const {dragItem, name, setDraggable,...rest} = props
  if (name === dragItem) {
    return renderDragButton({...rest, icon: 'pan_tool', onClick: () => null})
  }

  if (dragItem) {
    return renderDragButton({...rest, icon: 'insert_chart', onClick: setDestinyContainer(name, props)})
  }

  return renderDragButton({...rest, icon: 'drag_handle', onClick: () => setDraggable(name)})
}


function renderDragButton(props) {
  return (
    <div className="draggable">
      <a className="btn-floating btn-large waves-effect waves-light red" onClick={props.onClick}>
        <i className="material-icons">{props.icon}</i>
      </a>
      {
        props.children
      }
    </div>
  )
}

function setDestinyContainer(name, props) {
  return () => {
    props.changeContainers(props.dragItem, name, props.containers, props.setContainer)
    props.setDraggable(null)
  }
}