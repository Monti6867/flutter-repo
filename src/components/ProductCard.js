import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border: 2px solid #ccc;
  border-radius: 8px;
  padding: 5px; /* Decrease the vertical padding */
  max-width: 200px;
  margin: 5px; /* Decrease the vertical margin */
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f0f0f0;
`;

const Image = styled.img`
  width: 160px; /* Fixed width */
  height: 180px; /* Fixed height */
  border-radius: 10px;
`;

const Title = styled.h3`
  margin: 30px 0; /* Decrease the vertical margin */
`;

const Price = styled.p`
  margin: 10px 0;
`;

const ProductCard = ({ product }) => {
  return (
    <Card>
      <Image src={product.image} alt={product.name} />
      <Title>{product.title}</Title>
      <h4>{product.category}</h4>
      <Price>${product.price}</Price>
      <button>Add to Cart</button>
    </Card>
  );

  return (
    <div>
        <div className="container">
         <div className="row">
           <h1>LAtest product</h1>
         </div>
        </div>
    </div>

)
};



export default ProductCard;
