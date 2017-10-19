import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import styles from './home.css';
import { Link } from 'found';

class Home extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <div className={styles.base}>
        <ul>
          {data.posts.map(post => (
            <li key={post.id}>
              <Link to={post.url}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
