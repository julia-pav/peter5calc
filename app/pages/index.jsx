import Layout from '../components/layouts/Layout'

import * as React from 'react'

import { ChakraProvider } from '@chakra-ui/react'

// function App() {
// 	return (
// 		<ChakraProvider>
// 			<TheRestOfYourApplication />
// 		</ChakraProvider>
// 	)
// }

export default function Home() {
	return (
		<ChakraProvider>
			<Layout>
				<h1> Home Page </h1>
			</Layout>
		</ChakraProvider>
	)
}
