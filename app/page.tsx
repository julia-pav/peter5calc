import Link from 'next/link'
import React from 'react'

import { Heading, Box, Divider, Flex, Image, Container } from '@chakra-ui/react'

export default function Home() {
	const url1 = '/dashboard'
	const url2 = '/settings'
	return (
		<div>
			<Box bg='green' w='100%' p={4} color='white'>
				<h1>This is the Box</h1>

				<ul>
					<li>
						<a href={url1}>[GO TO DASHBOARD]</a>
					</li>
					<li>
						<a href={url2}>[GO TO SETTINGS]</a>
					</li>
				</ul>
			</Box>
		</div>
	)
}
