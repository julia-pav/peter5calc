import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>
        Hello!
      </h1>

<Link>
<a href="/dashboard">[Go to Dashboard Page]</a>
</Link>

<Link>
<a href="/settings">[Go to Settings Page]</a>
</Link>

    </div>
  )
}
