import { useState, useEffect } from "react";
import Input from "@components/common/input";
import ProductSelect from "@components/common/select/productSelect";
import ProductSizeSelect from "@components/common/select/productSizeSelect";
import { Col, Row } from "./styles";

const ProductSelectRow = ({ row, products, onProductUpdate }) => {
  const [sizes, setSizes] = useState([]);
  const [productId, setProductId] = useState("");
  const [size, setSize] = useState("");
  const [qty, setQty] = useState("");
  useEffect(() => {
    onProductUpdate({
      productId,
      size,
      qty,
    });
  }, [productId, size, qty, onProductUpdate]);

  const isDisabled = sizes.length > 0 ? false : true;
  return (
    <Row key={row.id} borderBottom={true}>
      <Col>
        <ProductSelect
          name="productId"
          products={products}
          onChange={(selectedProduct) => {
            setProductId(selectedProduct.id);
            const pSizes = [];
            selectedProduct.productVariations.forEach((variant: any) => {
              pSizes.push({
                title: `${variant.productSize[1].parent.title} ${variant.productSize[1].title}`,
                value: `${variant.productCode}`,
              });
            });
            setSizes(pSizes);
          }}
        />
      </Col>
      <Col>
        <ProductSizeSelect
          name="productSize"
          sizes={sizes}
          disabled={isDisabled}
          onChange={(selectedSize) => {
            setSize(selectedSize);
          }}
        />
      </Col>
      <Col>
        <Input
          type="text"
          name="productLabel"
          placeholder="Enter your quantity (m&sup2;)"
          disabled={isDisabled}
          onChange={(e) => {
            setQty(e.target.value);
          }}
          fullWidth
        />
      </Col>
    </Row>
  );
};

export default ProductSelectRow;
