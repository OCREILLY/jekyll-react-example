import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { Link } from 'found';

import styles from './_base.css';

const Base = props => (
  <div className={styles.base}>
    <header>
      <Link to="/">Home</Link>
      <Link to="/about/">About</Link>
    </header>
    <main className={styles.main}>{props.children}</main>
    <footer>
      <p>Footer</p>
    </footer>
  </div>
);

export default withStyles(styles)(Base);
