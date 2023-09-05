import { Box, Flex, Image, Container } from '@chakra-ua/react'

import { ColorModeSwitcher } from './ColorModeSwitcher'

import styles from './components/layouts/navstyle.module.css'

export default function Header() {
	const url1 = '/dashboard'
	const url2 = '/settings'
	return (
		<Box as='header'>
			<Container maxW='container.lg'>
				<Flex>
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
				</Flex>
			</Container>
		</Box>

		// <div>
		// 	<nav className={styles.navbar}>
		// 		<ul>
		// 			<li>
		// 				<a href='/'>Home</a>
		// 			</li>
		// 			<li>
		// 				<a href={url1}>GO TO DASHBOARD</a>
		// 			</li>
		// 			<li>
		// 				<a href={url2}>GO TO SETTINGS</a>
		// 			</li>
		// 		</ul>
		// 	</nav>
		// </div>
	)
}
