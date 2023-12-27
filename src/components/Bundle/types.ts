import { Bundle as BundleType, BundleProduct } from '../../types/bundle';

export type BundleProps = {
  bundle: BundleType;
};

export type BundlerProductProps = {
  product: BundleProduct;
};

export type BundleSkeletonProps = {
  count?: number;
};
