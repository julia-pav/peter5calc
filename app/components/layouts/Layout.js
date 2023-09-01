import Link from 'next/link';
import styles from './Layout.module.css';

export default function Layout({ children }) {
    return ( <
        div >
        <
        nav className = { styles.navbar } >
        <
        Link href = "/" >
        <
        a > Home < /a> <
        /Link> <
        Link href = "/about" >
        <
        a > About < /a> <
        /Link> <
        /nav> <
        main > { children } < /main> <
        /div>
    );
}