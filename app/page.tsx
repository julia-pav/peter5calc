// import Link from 'next/link';
import React from 'react';

export default function Home() {

const myUrl = '/dashboard';

  return (
    <div>
      <h1>
        Hello!
      </h1>
   

<a href={myUrl}>
[GO TO DASHBOARD]
</a>

 </div>
  );
}
