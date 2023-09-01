import Link from 'next/link';
import React from 'react';

// components/Layout.js

import styles from './Layout.module.css';

export default function Layout({ children }) {
  return (
    <div>
      <nav className={styles.navbar}>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
      </nav>
      <main>{children}</main>
    </div>
  );
}


export default function Home() {

const myHome = '/';

    return (
      <div>
        <h1>
          Dashboard!
        </h1>
      
   
<a href={myHome}>
[GO TO HOME]
</a>
  
</div>
  

 );
  }