import React from 'react'
import {Card, Col} from 'react-bootstrap'

const ProductList = ({product}) => {
  return (
    <Col ClassName="mb-8" lg={5}>
        <Card className='bg-red '>
            <Card.Img variant='top' src={product.image}/>
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Subtitle className='mb-4'>
                    {product.category}
                </Card.Subtitle>
                <Card.Text>${product.price}</Card.Text>
            </Card.Body>
        </Card>
    </Col>
  )
}

export default ProductList;