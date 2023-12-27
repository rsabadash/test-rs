import { BundleProduct as BundleProductType } from '../../types/bundle';
import { Button } from '../Button';
import { Carousel } from '../Carousel';
import { BundleProduct } from './BundleProduct';
import { BundleProps } from './types';

import classes from './styles/index.module.css';

export const Bundle = ({ bundle }: BundleProps) => {
  const { bgImage, available, maxAvailable, price, products } = bundle;
  const { currencySymbol, amount } = price;

  return (
    <div className={classes.bundle}>
      <div className={classes.bundle__imageWrapper}>
        <img
          className={classes.bundle__image}
          src={`${process.env.PUBLIC_URL}${bgImage}`}
          alt="Asset title"
        />
        <Carousel<BundleProductType>
          items={products}
          itemRenderer={(item) => (
            <BundleProduct key={item.id} product={item} />
          )}
          carouselClassName={classes.bundle_products}
        />
      </div>
      <div className={classes.bundle__footer}>
        <div
          className={classes.bundle__footerItemSide}
        >{`Available ${available}/${maxAvailable}`}</div>
        <Button
          buttonClassName={classes.bundle__footerItemButton}
        >{`${amount}${currencySymbol}`}</Button>
        <div className={classes.bundle__footerItemSide}>04:35:23</div>
      </div>
    </div>
  );
};
