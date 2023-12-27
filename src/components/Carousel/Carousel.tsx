import { ReactNode, useCallback, useState } from 'react';
import clsx from 'clsx';

import classes from './styles/index.module.css';

type CarouselProps<I> = {
  items: I[];
  keyProperty?: string;
  itemRenderer: (item: I) => ReactNode;
  itemsInView?: number;
  carouselClassName?: string;
};

const DIRECTION = document.documentElement.dir;

export const Carousel = <I extends { [key: string]: any }>({
  items,
  itemRenderer,
  keyProperty,
  itemsInView = 3,
  carouselClassName,
}: CarouselProps<I>) => {
  const itemWidth = 100 / itemsInView;
  const itemLength = items.length;

  const [activePartInView, setActivePartInView] = useState<number>(0);

  const handlePrev = useCallback(() => {
    setActivePartInView((prevIndex) => {
      if (prevIndex === 0) {
        return 0;
      }

      return prevIndex - itemsInView;
    });
  }, [itemsInView]);

  const handleNext = useCallback(() => {
    setActivePartInView((prevIndex) => {
      if (prevIndex + itemsInView !== itemLength) {
        return prevIndex + itemsInView;
      }

      return prevIndex;
    });
  }, [itemLength, itemsInView]);

  const isPrevDisabled = activePartInView === 0;
  const isNextDisabled = activePartInView + itemsInView === itemLength;

  const carouselClassNames = clsx(classes.carousel, carouselClassName);
  const carouselPrevActionClassNames = clsx(
    classes.carousel_action,
    classes.carousel_prevAction,
  );
  const carouselNextActionClassNames = clsx(
    classes.carousel_action,
    classes.carousel_nextAction,
  );

  const itemStyles = {
    minWidth: `${itemWidth}%`,
    transform:
      DIRECTION === 'rtl'
        ? `translateX(${activePartInView * 100}%)`
        : `translateX(-${activePartInView * 100}%)`,
  };

  return (
    <div className={carouselClassNames} aria-roledescription="carousel">
      <button
        onClick={handlePrev}
        className={carouselPrevActionClassNames}
        disabled={isPrevDisabled}
        aria-label="Previous item"
      >
        {'<'}
      </button>
      <div className={classes.carousel_items}>
        {items.map((item, index) => (
          <div
            // we can define which key of item is used to get value for unique "key" otherwise index is used
            key={
              `${keyProperty}` in item && keyProperty
                ? item[keyProperty].toString()
                : index
            }
            style={itemStyles}
          >
            {itemRenderer(item)}
          </div>
        ))}
      </div>
      <button
        onClick={handleNext}
        className={carouselNextActionClassNames}
        disabled={isNextDisabled}
        aria-label="Next item"
      >
        {'>'}
      </button>
    </div>
  );
};
