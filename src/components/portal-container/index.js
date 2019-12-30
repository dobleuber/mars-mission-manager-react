import * as React from 'react';
import {createPortal} from 'react-dom';

export class PortalContainer extends React.Component {
  constructor(props) {
    super(props);
    if (typeof window !== 'undefined') {
      // Create a div that we'll render the children into.
      this.el = document.createElement('div');
    }
  }

  componentDidMount() {
    if (typeof window !== 'undefined') {
      const containerRoot = document.getElementById(this.props.containerId);
      if (containerRoot) {
        containerRoot.appendChild(this.el);
      }
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.containerId && this.props.containerId !== prevProps.containerId) {
      const containerRootNext = document.getElementById(this.props.containerId);
      const containerRoot = document.getElementById(prevProps.containerId);
      if (containerRoot && containerRoot.contains(this.el)) {
        containerRoot.removeChild(this.el);
      }
      if (containerRootNext) {
        containerRootNext.appendChild(this.el);
      }
    }
  }

  componentWillUnmount() {
    const containerRoot = document.getElementById(this.props.containerId);
    if (containerRoot && containerRoot.contains(this.el)) {
      containerRoot.removeChild(this.el);
    }
  }

  render() {
    if (typeof window !== 'undefined') {
      return createPortal(
        this.props.children,
        this.el
      );
    }

    return null
  }
}

export default PortalContainer