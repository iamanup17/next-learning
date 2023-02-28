import Link from 'next/link';
import React from 'react';

const productList = () => {
  return (
    <div>
      <ul>
        <Link href="/"> Back </Link>
        <br />
        <Link href={'/product/1'}>Product 1</Link>
        <br />
        <Link href={'/product/2'}>Product 2</Link>
        <br />
        <Link href={'/product/3'} replace>
          Product 3
        </Link>
        <br />
      </ul>
    </div>
  );
};

export default productList;
