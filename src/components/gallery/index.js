import React from 'react'

import {imageArray} from '../../utils/image-loader'

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
              imageArray.map((img, i) => (
                <a
                  key={i}
                  className="carousel-item" href={`#${i}!`}
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
      this.props.setSelectedImage(imageArray[index])
    }
}

export default Gallery