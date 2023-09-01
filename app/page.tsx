import Link from 'next/link';
import React from 'react';

import { Heading, Box, Divider } from "@chakra-ui/react";

export default function Home() {

const url1 = '/dashboard';
const url2 = '/settings'
  return (
    <div>

<Box bg='tomato' w='100%' p={4} color='white'>
This is the Box
</Box>

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
