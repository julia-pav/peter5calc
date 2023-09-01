import Link from 'next/link';
// import styles from './components/layouts/navstyle';



export default function Header() {
    return (
        <div>

{/* <style  type="text/css">

  .navbar {
    background-color: #333;
    color: white;
    padding: 1rem;
  }

  .navbar a {
    margin: 0 15px;
    color: white;
    text-decoration: none;
  }
</style> */}

        <nav className={navbar}>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
      </nav>
      <main>{children}</main>


      
<style  type="text/css">

  .navbar {
  background-color: #333;
  color: white;
  padding: 1rem;
  }

  .navbar a {
  margin: 0 15px;
  color: white;
  text-decoration: none;
  }
</style>

        </div>
    
    
    )
}