import Link from 'next/link';
import styles from './components/layouts/navstyle.module.css';



export default function Header() {
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
    
    
    )
}