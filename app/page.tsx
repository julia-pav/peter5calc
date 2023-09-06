// 'use client'
// import Link from 'next/link'
import React from 'react'
// import { ChakraProvider } from '@chakra-ui/react'

// import { Heading, Box, Divider, Flex, Image, Container } from '@chakra-ui/react'

import { Link } from '@chakra-ui/next-js'

export default function Page() {
	return (
		<Link href='./pages/about' color='blue.400' _hover={{ color: 'blue.500' }}>
			About
		</Link>
	)
}

// export default function Home() {
// 	const url1 = '/dashboard'
// 	const url2 = '/settings'
// 	return (
// 		<ChakraProvider>
// 			<Box bg='green' w='100%' p={4} color='white'>
// 				<h1>This is the Box</h1>

// 				<ul>
// 					<li>
// 						<a href={url1}>[GO TO DASHBOARD]</a>
// 					</li>
// 					<li>
// 						<a href={url2}>[GO TO SETTINGS]</a>
// 					</li>
// 				</ul>
// 			</Box>
// 		</ChakraProvider>

// 		//  <ChakraProvider>
// 		//       <Component {...pageProps} />
// 		//     </ChakraProvider>
// 	)
// }
