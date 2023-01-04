import React from "react";
import Image from "next/image";
import Link from "next/link";

async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products?limit=6");
  const products = await res.json();
  // throw new Error("test error");
  return products;
}

const ProductsPage = async () => {
  const products = await getProducts();

  return (
    <section style={{ backgroundColor: "#eee" }}>
      <div className="container py-5">
        <div className="row">
          {products?.map((product) => (
            <div
              key={product?.id}
              className="col-md-12 col-lg-4 mb-4 mb-lg-0 pt-4 "
            >
              <div className="card h-100">
                <Image
                  src={product.image}
                  className="card-img-top p-5"
                  height={320}
                  width={100}
                  alt={product.title}
                />
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <p className="small">{product.category}</p>
                  </div>

                  <div className="d-flex justify-content-between mb-3">
                    <Link href={`/products/${product.id}`}>
                      <h5 className="mb-0">{product.title}</h5>
                    </Link>
                    <h5 className="text-dark mb-0">${product.price}</h5>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsPage;
