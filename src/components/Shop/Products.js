import { useEffect } from 'react';
import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    price: 6,
    title: 'My first Book',
    description: 'The first book i have ever wrote',
  },
  {
    id: 'p2',
    price: 5,
    title: 'My second Book',
    description: 'The first book i have ever wrote',
  },
];

const Products = (props) => {
  // let UpdatedCartItem = [];
  // useEffect(() => {
  //   const fetchCart = async () => {
  //     const response = await fetch(
  //       'https://redux-0452-default-rtdb.firebaseio.com/cart.json'
  //     );
  //     const cartItem = await response.json();
  //     UpdatedCartItem.push(cartItem)
  //   };
  //   fetchCart();
  // }, [UpdatedCartItem]);
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => {
          return (
            <ProductItem
              key={product.id}
              id={product.id}
              price={product.price}
              title={product.title}
              description={product.description}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
