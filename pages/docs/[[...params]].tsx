import { useRouter } from 'next/router';
import React from 'react';

const docs = () => {
  const router = useRouter();
  const { params = [] } = router.query;
  console.log(params);
  if (params.length === 2) {
    return (
      <h1>
        Viewing for feature {params[0]} and concept {params[1]}{' '}
      </h1>
    );
  } else if (params.length === 1) {
    return <h1>Viewing for feature {params[0]} </h1>;
  }
  return (
    <div>
      <h2>docs home page</h2>
    </div>
  );
};

export default docs;
