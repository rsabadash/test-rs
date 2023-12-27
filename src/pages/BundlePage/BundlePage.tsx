import { Bundle } from '../../components/Bundle';
import { BundleSkeleton } from '../../components/Bundle/BundleSkeleton';
import { useFetchBundles } from '../../hooks/useFetchBundles';

import classes from './styles/index.module.css';

export const BundlePage = () => {
  const { data: bundles, isLoading } = useFetchBundles();

  return (
    <div className={classes.bundlePage}>
      {!isLoading &&
        bundles &&
        bundles.map((bundle) => {
          return <Bundle key={bundle.id} bundle={bundle} />;
        })}
      {isLoading && <BundleSkeleton count={3} />}
    </div>
  );
};
