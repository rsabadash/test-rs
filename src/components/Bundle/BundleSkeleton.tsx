import { BundleSkeletonProps } from './types';

import classes from './styles/index.module.css';

export const BundleSkeleton = ({ count = 1 }: BundleSkeletonProps) => {
  const skeletonItems = [...Array(count).keys()];

  return (
    <>
      {skeletonItems.map((item) => (
        <div key={item} className={classes.bundleSkeleton} />
      ))}
    </>
  );
};
