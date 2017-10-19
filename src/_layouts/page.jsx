import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import styles from './page.css';
import JekyllContent from '../components/JekyllContent';

class Page extends React.Component {
  render() {
    const { page, content } = this.props.data;
    return (
      <div>
        <h1>{page.title}</h1>
        <JekyllContent html={content} />
      </div>
    );
  }
}

export default withStyles(styles)(Page);
