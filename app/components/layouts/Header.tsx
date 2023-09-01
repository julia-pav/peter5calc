import Link from 'next/link';
// import styles from './components/layouts/navstyle.module.css';



export default function Header() {
  const url1 = '/dashboard';
const url2 = '/settings'
    return (
        <div>

        <nav >
        <Link href="/">
          <a>[Home]</a>
        </Link>
        
   
<a href={url1}>
[GO TO DASHBOARD]
</a>

<a href={url2}>
[GO TO SETTINGS]
</a>
</nav>

 </div>
     

    
    
    )
}