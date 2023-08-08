import React, { Fragment, useState } from 'react'
import {products} from '../data/products'
import { Container, Col, Row, Form } from 'react-bootstrap'
import ProductList from '../components/ProductList'

const Products = () => {
    const [laptopProducts, setLaptopProducts] = useState(products)

    function sortPriceLowToHigh(){
      return[...laptopProducts].sort(
        (a, b) => parseFloat(a.price) - parseFloat(b.price)
      )
    }
    function sortPriceHighToLow(){
      return[...laptopProducts].sort(
        (a, b) => parseFloat(b.price) - parseFloat(a.price)
      )
    }

    function sortDefault(){
      return [...laptopProducts].sort(
        (a, b) => parseFloat(a.id) - parseFloat(b.id)
      )
    }

    const sortPrice = (e) => {
      if(e.target.value === 'priceLowToHigh'){
        setLaptopProducts(sortPriceLowToHigh());
      }else if (e.target.value === 'priceHighToLow'){
        setLaptopProducts(sortPriceHighToLow())
      }else{
        setLaptopProducts(sortDefault())
      }
    }

    const filterProduct = (e) => {
      if(e.target.value !== 'All'){
        if(e.target.checked) {
          let filteredProduct = products.filter((product) => {
            return product.category === e.target.value
          });
          setLaptopProducts(filteredProduct)
          document.getElementById('defaultSort').selected = true
        }else{
          setLaptopProducts(products)
          document.getElementById('defaultSort').selected = true;
        }
      }else{
        setLaptopProducts(products)
        document.getElementById('defaultSort').selected= true
      }
    }
  return (
    <Fragment>
        <Container>
            <div className='mt-5 d-flex justify-content-end'>
                <Form.Group controlId='formGridState'>
                  <Form.Select onChange={sortPrice} defaultValue='Sort list'>
                    <option id='defaultSort'>Sort list</option>
                    <option value='priceLowToHigh'>Price - Low to High</option>
                    <option value='priceHighToLow'>Price - High to Low</option>
                  </Form.Select>
                </Form.Group>
            </div>
            <Row>
              <Col lg={2} sm={2}>
              <div>
                <h4>Laptop Category</h4>
                <Form.Check
                  type='radio'
                  id='all'
                  label='All'
                  name='category'
                  value='All'
                  onChange={filterProduct}
                />
                <Form.Check
                  type='radio'
                  id='gamingLaptop'
                  label='Gamimg Laptop'
                  name='category'
                  value='Gaming'
                  onChange={filterProduct}

                />
                <Form.Check
                  type='radio'
                  id='bussinessLaptop'
                  label='Bussiness Laptop'
                  name='category'
                  value='Bussiness'
                  onChange={filterProduct}

                />
                <Form.Check
                  type='radio'
                  id='workingLaptop'
                  label='Working Laptop'
                  name='category'
                  value='Working'
                  onChange={filterProduct}

                />
              </div>
              </Col>
              <Col lg={10} sm={10}>
              <Row className='mt-5'>
                {laptopProducts.map((product) => (
                  <ProductList key={product.id} product={product}/>
                ))}
              </Row>
              </Col>
            </Row>
        </Container>
    </Fragment>

   
  )
}

export default Products