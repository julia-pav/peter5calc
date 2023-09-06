// import Link from 'next/link';
import React from 'react'

export default function Home() {
	const myHome = '/'

	return (
		<div>
			<h1>Dashboard!</h1>
			<a href={myHome}>[GO TO HOME]</a>
		</div>
	)
}
