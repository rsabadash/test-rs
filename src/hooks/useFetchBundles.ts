import { useEffect, useState } from 'react';

import bundlesData from '../data/bundles.json';
import { Bundle } from '../types/bundle';

type UseFetchBundlesReturn = {
  data: undefined | Bundle[];
  isLoading: boolean;
};

export const useFetchBundles = (): UseFetchBundlesReturn => {
  const [data, setData] = useState<Bundle[] | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);

    const response = new Promise<Bundle[]>((resolve) => {
      setTimeout(() => {
        resolve(bundlesData);
      }, 5000);
    });

    // error was not handled as it depends on use case how we want to do it
    response.then((data) => {
      setData(data);
      setIsLoading(false);
    });
  }, []);

  return {
    data,
    isLoading,
  };
};
