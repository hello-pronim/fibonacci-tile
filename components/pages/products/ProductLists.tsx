import {
    ProductListItems,
    ProductItem,
    ProductTitle,
    ProductSubTitle
  } from "./styles";
import Image from "next/image";
import Product from "public/product-image.jpg";

  
  function ProductLists() {
    return (
      <ProductListItems>
        <ProductItem>
            <Image src={Product} alt="Product-1" />
            <ProductTitle>Neues Grey Superfine</ProductTitle>
            <ProductSubTitle>Word • Word • Word</ProductSubTitle>
        </ProductItem>
        <ProductItem>
            <Image src={Product} alt="Product-1" />
            <ProductTitle>Neues Grey Superfine</ProductTitle>
            <ProductSubTitle>Word • Word • Word</ProductSubTitle>
        </ProductItem>
        <ProductItem>
            <Image src={Product} alt="Product-1" />
            <ProductTitle>Neues Grey Superfine</ProductTitle>
            <ProductSubTitle>Word • Word • Word</ProductSubTitle>
        </ProductItem>
        <ProductItem>
            <Image src={Product} alt="Product-1" />
            <ProductTitle>Neues Grey Superfine</ProductTitle>
            <ProductSubTitle>Word • Word • Word</ProductSubTitle>
        </ProductItem>
        <ProductItem>
            <Image src={Product} alt="Product-1" />
            <ProductTitle>Neues Grey Superfine</ProductTitle>
            <ProductSubTitle>Word • Word • Word</ProductSubTitle>
        </ProductItem>
        <ProductItem>
            <Image src={Product} alt="Product-1" />
            <ProductTitle>Neues Grey Superfine</ProductTitle>
            <ProductSubTitle>Word • Word • Word</ProductSubTitle>
        </ProductItem>
      </ProductListItems>
    );
}

export default ProductLists;
  