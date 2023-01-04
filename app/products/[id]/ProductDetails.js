import Image from "next/image";
import Link from "next/link";
import React from "react";
import { notFound } from "next/navigation";

async function getProductDetails(id) {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const product = await res.json();
    return product;
  } catch (error) {
    console.log(error);
  }
}

const ProductDetails = async ({ params }) => {
  const product = await getProductDetails(params.id);

  if (!product) return notFound();

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-5">
          <Image
            src={product.image}
            className="card-img-top p-5"
            height={400}
            width={100}
            alt={product.title}
          />
        </div>

        <div className="col-6 mt-5">
          <h2 className="my-4">{product.title}</h2>
          <h6 className="my-4">{product.category}</h6>
          <h3 className="my-4">${product.price}</h3>
        </div>

        <div className="mt-5">
          <Link href="/products">Go Back</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
