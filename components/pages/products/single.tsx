import React, { useEffect, useState, useRef } from "react";
import Container from "@components/common/layout/container";
import ProductsHeader from "./Header";
import styles from "./styles.module.scss";

const ProductPage = () => {
  return (
    <>
     <ProductsHeader mode="dark" />
      <Container>
        <div className={styles.singleProductContiner}>
          product single page goes here
        </div>
      </Container>
    </>
  );
};
export default ProductPage;
