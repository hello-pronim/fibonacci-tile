import React, { useState } from "react";
import AccentText from "@components/common/accentText";
import ArrowButton from "@components/common/button/arrowButton";
import Input from "@components/common/input";
import Select from "@components/common/select";
import ProductSelect from "@components/common/select/productSelect";
import ProductSizeSelect from "@components/common/select/productSizeSelect";
import TextArea from "@components/common/textarea";
import AddIcon from "@components/icons/add";

import Abstrakt from "public/tmp/prod/abstrakt.jpeg";
import ActThree from "public/tmp/prod/actThree.jpeg";
import Assemblage from "public/tmp/prod/assemblage.jpeg";
import Bloc from "public/tmp/prod/bloc.jpeg";
import Brackish from "public/tmp/prod/brackish.jpeg";
import Carmelita from "public/tmp/prod/carmelita.jpeg";
import CloudBurst from "public/tmp/prod/cloudBurst.jpeg";
import CoolStream from "public/tmp/prod/coolStream.jpeg";

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

const QuoteRequestForm = ({ products }) => {
  // const products = [
  //   {
  //     id: "1",
  //     richText:
  //       "<p>A democratic mix of colours, shapes and sizes, displaying the great egalitarian hallmarks of robustness and diversity.</p>",
  //     slug: "abstrakt",
  //     subHeading: "Complex • Robust • Diverse",
  //     title: "Abstrakt",
  //     uri: "/products/abstrakt",
  //     img1: Abstrakt,
  //   },
  //   {
  //     id: "2",
  //     richText:
  //       "<p>A democratic mix of colours, shapes and sizes, displaying the great egalitarian hallmarks of robustness and diversity.</p>",
  //     slug: "act-three",
  //     subHeading: "Complex • Robust • Diverse",
  //     title: "Act Three",
  //     uri: "/products/act-three",
  //     img1: ActThree,
  //   },
  //   {
  //     id: "3",
  //     richText:
  //       "<p>A democratic mix of colours, shapes and sizes, displaying the great egalitarian hallmarks of robustness and diversity.</p>",
  //     slug: "assemblage",
  //     subHeading: "Complex • Robust • Diverse",
  //     title: "Assemblage",
  //     uri: "/products/assemblage",
  //     img1: Assemblage,
  //   },
  //   {
  //     id: "4",
  //     richText:
  //       "<p>A democratic mix of colours, shapes and sizes, displaying the great egalitarian hallmarks of robustness and diversity.</p>",
  //     slug: "bloc",
  //     subHeading: "Complex • Robust • Diverse",
  //     title: "Bloc",
  //     uri: "/products/bloc",
  //     img1: Bloc,
  //   },
  //   {
  //     id: "5",
  //     richText:
  //       "<p>A democratic mix of colours, shapes and sizes, displaying the great egalitarian hallmarks of robustness and diversity.</p>",
  //     slug: "brackish",
  //     subHeading: "Complex • Robust • Diverse",
  //     title: "Brackish",
  //     uri: "/products/brackish",
  //     img1: Brackish,
  //   },
  //   {
  //     id: "6",
  //     richText:
  //       "<p>A democratic mix of colours, shapes and sizes, displaying the great egalitarian hallmarks of robustness and diversity.</p>",
  //     slug: "carmelita",
  //     subHeading: "Complex • Robust • Diverse",
  //     title: "Carmelita",
  //     uri: "/products/carmelita",
  //     img1: Carmelita,
  //   },
  //   {
  //     id: "7",
  //     richText:
  //       "<p>A democratic mix of colours, shapes and sizes, displaying the great egalitarian hallmarks of robustness and diversity.</p>",
  //     slug: "cloudburst",
  //     subHeading: "Complex • Robust • Diverse",
  //     title: "Cloudburst",
  //     uri: "/products/cloudburst",
  //     img1: CloudBurst,
  //   },
  //   {
  //     id: "8",
  //     richText:
  //       "<p>A democratic mix of colours, shapes and sizes, displaying the great egalitarian hallmarks of robustness and diversity.</p>",
  //     slug: "coolstream",
  //     subHeading: "Complex • Robust • Diverse",
  //     title: "CoolStream",
  //     uri: "/products/coolstream",
  //     img1: CoolStream,
  //   },
  //   {
  //     id: "9",
  //     richText:
  //       "<p>A democratic mix of colours, shapes and sizes, displaying the great egalitarian hallmarks of robustness and diversity.</p>",
  //     slug: "cloudburst",
  //     subHeading: "Complex • Robust • Diverse",
  //     title: "Cloudburst",
  //     uri: "/products/cloudburst",
  //     img1: CloudBurst,
  //   },
  //   {
  //     id: "10",
  //     richText:
  //       "<p>A democratic mix of colours, shapes and sizes, displaying the great egalitarian hallmarks of robustness and diversity.</p>",
  //     slug: "coolstream",
  //     subHeading: "Complex • Robust • Diverse",
  //     title: "CoolStream",
  //     uri: "/products/coolstream",
  //     img1: CoolStream,
  //   },
  // ];
  const sizes = [
    {
      title: "Tile: 400x400x15mm",
      value: "400x400x15",
    },
    {
      title: "Tile: 400x400x17mm",
      value: "400x400x17",
    },
    {
      title: "Tile: 400x400x20mm",
      value: "400x400x20",
    },
    {
      title: "Tile: 600x600x20mm",
      value: "600x600x17",
    },
    {
      title: "Slab: 1440x3500x30mm",
      value: "1440x3500x30",
    },
  ];
  const defaultProduct = { id: 0, size: 0, label: "" };
  const [myProducts, setMyProducts] = useState([defaultProduct]);

  const handleSubmit = () => {};
  const handleProductAdd = () => {
    let newProducts = [...myProducts];

    newProducts.push(defaultProduct);
    setMyProducts(newProducts);
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
              {myProducts.map((product) => (
                <Row key={product.id}>
                  <Col>
                    <ProductSelect name="productId" products={products} />
                  </Col>
                  <Col>
                    <ProductSizeSelect name="productSize" sizes={sizes} />
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
              <ArrowButton mode="dark" title="Submit" onClick={() => {}} />
            </FormGroup>
          </Form>
        </FormBody>
      </Wrapper>
    </Container>
  );
};

export default QuoteRequestForm;
