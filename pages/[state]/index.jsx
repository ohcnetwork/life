import React from 'react';
import { useRouter } from "next/router";

function State() {
  const router = useRouter();
  return (
    <div>
      {router.query.state}
    </div>
  )
}

export default State
