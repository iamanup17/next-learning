import { useRouter } from 'next/router';
import React from 'react';

const review = () => {
  const router = useRouter();
  const { productId, reviewId } = router.query;
  //   const reviewId = router.query.reviewId;
  //   const productId = router.query.productId;
  return (
    <div>
      <h2>
        review {reviewId} for product {productId}{' '}
      </h2>
    </div>
  );
};

export default review;
