import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const ProductDetails = () => {
  const router = useRouter();
  const productId = router.query.productId;
  console.log(productId);
  return (
    <div>
      <h2>Product details page {productId} </h2>{' '}
    </div>
  );
};

export default ProductDetails;
