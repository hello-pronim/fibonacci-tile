import React, { useState } from "react";
import AccentText from "@components/common/accentText";
import ArrowButton from "@components/common/button/arrowButton";
import Input from "@components/common/input";
import Select from "@components/common/select";
import TextArea from "@components/common/textarea";
import AddIcon from "@components/icons/add";

import {
  AddProductButton,
  AddProductButtonText,
  Col,
  Container,
  Form,
  FormBody,
  FormDescription,
  FormGroup,
  FormGroupTitle,
  FormHeader,
  FormHeaderLeft,
  FormHeaderRight,
  FormHeaderWrapper,
  FormTitle,
  Row,
  Wrapper,
} from "./styles";

const QuoteRequestForm = () => {
  const defaultProduct = { id: 0, size: 0, label: "" };
  const [products, setProducts] = useState([defaultProduct]);
  const handleSubmit = () => {};
  const handleProductAdd = () => {
    let newProducts = [...products];

    newProducts.push(defaultProduct);
    setProducts(newProducts);
  };

  return (
    <Container>
      <AccentText top={0}>Request a quote</AccentText>
      <Wrapper>
        <FormHeader>
          <FormHeaderWrapper>
            <FormHeaderLeft>
              <FormTitle>
                Complete the form the below, tell us about your project and
                select your products.
              </FormTitle>
            </FormHeaderLeft>
            <FormHeaderRight>
              <FormDescription>
                If you are experiencing any issues with this form, please email
                your requests directly to info@fibonacci.com.au
                <br />
                <br />
                All quote requests will be actioned within 24 hours of receiving
                all the required information.
              </FormDescription>
            </FormHeaderRight>
          </FormHeaderWrapper>
        </FormHeader>
        <FormBody>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Row>
                <Col>
                  <FormGroupTitle>About you</FormGroupTitle>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    fullWidth
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    fullWidth
                  />
                </Col>
                <Col>
                  <Input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    fullWidth
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Input
                    type="text"
                    name="company"
                    placeholder="Company"
                    fullWidth
                  />
                </Col>
                <Col>
                  <Input
                    type="text"
                    name="contactNumber"
                    placeholder="Contact Number"
                    fullWidth
                  />
                </Col>
              </Row>
            </FormGroup>
            <FormGroup>
              <Row>
                <Col>
                  <FormGroupTitle>About the project</FormGroupTitle>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Input
                    type="text"
                    name="projectName"
                    placeholder="Project Name"
                    fullWidth
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Input
                    type="text"
                    name="projectLocations"
                    placeholder="Project Locations"
                    fullWidth
                  />
                </Col>
                <Col>
                  <Input
                    type="text"
                    name="type"
                    placeholder="Specify Architect/Interior Designer"
                    fullWidth
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <TextArea
                    name="additionalInformation"
                    placeholder="Additional Information/Special Requirements"
                    rows={4}
                  />
                </Col>
              </Row>
            </FormGroup>
            <FormGroup>
              <Row>
                <Col>
                  <FormGroupTitle>About the product</FormGroupTitle>
                </Col>
              </Row>
              {products.map((product) => (
                <Row key={product.id}>
                  <Col>
                    <Select name="productId" fullWidth>
                      <option>Choose a product</option>
                      <option>Product 1</option>
                      <option>Product 2</option>
                      <option>Product 3</option>
                    </Select>
                  </Col>
                  <Col>
                    <Select name="productSize" fullWidth>
                      <option>Choose a size</option>
                      <option>Tile: 400x400x15mm</option>
                      <option>Tile: 400x400x17mm</option>
                      <option>Tile: 400x400x20mm</option>
                      <option>Tile: 600x600x17mm</option>
                      <option>Tile: 1440x3500x30mm</option>
                    </Select>
                  </Col>
                  <Col>
                    <Input
                      type="text"
                      name="productLabel"
                      placeholder="Label"
                      fullWidth
                    />
                  </Col>
                </Row>
              ))}
              <Row>
                <Col>
                  <AddProductButton onClick={handleProductAdd}>
                    <AddProductButtonText>
                      Load another product
                    </AddProductButtonText>
                    <AddIcon color="black" />
                  </AddProductButton>
                </Col>
              </Row>
            </FormGroup>
            <FormGroup>
              <ArrowButton
                mode="dark"
                title="View product details"
                link="http://localhost:3000/products"
              />
            </FormGroup>
          </Form>
        </FormBody>
      </Wrapper>
    </Container>
  );
};

export default QuoteRequestForm;
