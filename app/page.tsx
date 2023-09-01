import Link from 'next/link';
import React from 'react';

export default function Home() {

const url1 = '/dashboard';
const url2 = '/settings'
  return (
    <div>
      <h1>
        Hello!
      </h1>
   
<a href={url1}>
[GO TO DASHBOARD]
</a>

<a href={url2}>
[GO TO SETTINGS]
</a>

 </div>
  );
}
