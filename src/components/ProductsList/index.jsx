import { Box } from "@mui/system";
import React from "react";
import ProductCard from '../ProductCard'

function ProductsList({ products }) {
  return (
    <Box sx={
      {
        display: "flex",
        flexWrap: "wrap",
        margin: "auto",
        justifyContent: "space-around"
      }
    }>
      {products.map((product) =>
        <ProductCard
          key={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
          thumbnail={product.thumbnail}
          link={product.link}
        />)}
    </Box>
  );
}

export default ProductsList;
