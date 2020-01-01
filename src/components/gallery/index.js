import React from 'react'

import PropTypes from 'prop-types'

import './styles.scss'

function Gallery (props) {
  const setImage = (index) => () => {
    props.setSelectedImageIndex(index)
  }
  return (
    <div
      id="gallery"
    >
      {
        props.imageArray.map((img, i) => (
            <img
              className={[
                i === props.selectedImageIndex ? 'active' : '',
                'gallery-item',
              ].join(' ')}
              key={i}
              onClick={setImage(i)}
              src={img}
            />
          )
        )
      }
    </div>
  )
}

Gallery.propTypes = {
  imageArray: PropTypes.array,
  selectedImageIndex: PropTypes.number,
  setSelectedImageIndex: PropTypes.func,
}

export default Gallery