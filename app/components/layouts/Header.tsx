import Link from 'next/link';
// import styles from './components/layouts/navstyle.module.css';



export default function Header() {
    return (
        <div>

        <nav >
        <Link href="/">
          <a>[Home]</a>
        </Link>
        <Link href="/dashboard">
          <a>[DASHBOARD]</a>
        </Link>
        <Link href="/settings">
          <a>[SETTINGS]</a>
        </Link>
      </nav>
        </div>
    
    
    )
}