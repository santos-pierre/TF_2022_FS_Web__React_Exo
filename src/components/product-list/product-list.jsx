import PriceFormat from '../price-format/price-format';
import style from './product-list.module.css';

const ProductListItem = ({ name, price, promo }) => (
  <article className={style.product}>
    <p>{name} {promo && <span className={style.promo}>Promo !</span>}</p>
    <p>Prix : <PriceFormat value={price} className={style.price} /></p>
  </article>
);

const ProductList = ({ products }) => {

  return (
    <div>
      {products.map(product => (
        <ProductListItem key={product.id} {...product} />
      ))}
    </div>
  );
};

ProductList.defaultProps = {
  products: []
};

export default ProductList;