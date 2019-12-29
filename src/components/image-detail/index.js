import React from 'react'

class ImageDetail extends React.Component{
  componentDidMount() {
    if (typeof window !== 'undefined') {
      this.materialBoxInstance = M.Materialbox.init(this.materialBox)
    }
  }
  render() {
    return (
      <img
        id="imageDetail"
        className="materialboxed responsive-img"
        ref={ (materialBox) => {this.materialBox = materialBox} }
        src={this.props.src}
        width="650"
      />
    );
  }

  componentWillUnmount() {
    this.materialBoxInstance.destroy()
  }
}

export default ImageDetail;