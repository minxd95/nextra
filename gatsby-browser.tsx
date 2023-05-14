import React from 'react';
import { RecoilRoot } from 'recoil';

export const wrapRootElement = ({ element }: { element: React.ReactNode }) => {
  return <RecoilRoot>{element}</RecoilRoot>;
};
