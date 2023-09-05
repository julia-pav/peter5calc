import styles from './components/layouts/navstyle.module.css'

export default function Header() {
	const url1 = '/dashboard'
	const url2 = '/settings'
	return (
		<div>
			<nav className={styles.navbar}>
				<ul>
					<li>
						<a href='/'>Home</a>
					</li>
					<li>
						<a href={url1}>GO TO DASHBOARD</a>
					</li>
					<li>
						<a href={url2}>GO TO SETTINGS</a>
					</li>
				</ul>
			</nav>
		</div>
	)
}
