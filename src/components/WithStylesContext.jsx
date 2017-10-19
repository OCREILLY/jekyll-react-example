import { Component, Children } from 'react';
import PropTypes from 'prop-types';

class WithStylesContext extends Component {
  getChildContext() {
    return { insertCss: this.props.onInsertCss };
  }

  render() {
    return Children.only(this.props.children);
  }
}

WithStylesContext.propTypes = {
  onInsertCss: PropTypes.func.isRequired,
};

WithStylesContext.childContextTypes = {
  insertCss: PropTypes.func.isRequired,
};

export default WithStylesContext;
