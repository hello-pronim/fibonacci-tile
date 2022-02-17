import { useState } from "react";
import Input from "@components/common/input";
import ProductSelect from "@components/common/select/productSelect";
import ProductSizeSelect from "@components/common/select/productSizeSelect";
import { Col, Row } from "./styles";

const ProductSelectRow = ({ row, products }) => {
  const [sizes, setSizes] = useState([]);
  return (
    <Row key={row.id}>
      <Col>
        <ProductSelect
          name="productId"
          products={products}
          onChange={(selectedProduct) => {
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
        <ProductSizeSelect name="productSize" sizes={sizes} />
      </Col>
      <Col>
        <Input type="text" name="productLabel" placeholder="Label" fullWidth />
      </Col>
    </Row>
  );
};

export default ProductSelectRow;
