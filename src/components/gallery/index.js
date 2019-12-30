import React from 'react'

import PropTypes from 'prop-types'

class Gallery extends React.Component {
    componentDidMount() {
      if (typeof window !== 'undefined') {
        const ops = {
          indicators: true,
          numVisible: 5,
        }
        this.carouselInstance = M.Carousel.init(this.carousel, ops)
      }
    }

    render() {
        return (
          <div
            className="carousel"
            id="carousel"
            ref={ (carousel) => {this.carousel = carousel} }
          >
            {
              this.props.imageArray.map((img, i) => (
                <a
                  key={i}
                  className="carousel-item"
                  onClick={this.setImage(i)}
                >
                  <img src={img}/>
                </a>)
              )
            }
          </div>
        )
    }

    componentWillUnmount() {
      this.carouselInstance.destroy()
    }

    setImage = (index) => () => {
      this.props.setSelectedImage(this.props.imageArray[index])
    }
}

Gallery.propTypes = {
  imageArray: PropTypes.array,
  setSelectedImage: PropTypes.func,
}

export default Gallery