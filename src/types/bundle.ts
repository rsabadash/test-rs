export type BundlePrice = {
  amount: number;
  currencySymbol: string;
};

export type BundleProduct = {
  id: number;
  productImage: string;
  amount: string;
  productTextColor: string;
};

export type Bundle = {
  id: number;
  bgImage: string;
  timeLeftMs: number;
  maxAvailable: number;
  available: number;
  price: BundlePrice;
  products: BundleProduct[];
};
