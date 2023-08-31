// import Link from 'next/link';

export default function Home() {

const myUrl = '/dashboard';

  return (
    <div>
      <h1>
        Hello!
      </h1>
    </div>

<a href={myUrl}>
[GO TO DASHBOARD]
</a>

  )
}
