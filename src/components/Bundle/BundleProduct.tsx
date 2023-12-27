import { BundlerProductProps } from './types';

import classes from './styles/index.module.css';

export const BundleProduct = ({ product }: BundlerProductProps) => {
  const { productImage, productTextColor, amount } = product;

  return (
    <div className={classes.bundle_product}>
      <img
        src={`${process.env.PUBLIC_URL}${productImage}`}
        alt="Product logo"
      />
      <div style={{ color: productTextColor }}>{amount}</div>
    </div>
  );
};
