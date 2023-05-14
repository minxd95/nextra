import { css } from '@emotion/react';

interface MainProps {
  children?: React.ReactNode;
}
const Main = ({ children }: MainProps) => {
  return (
    <main
      css={css`
        max-width: 1200px;
        margin: 0 auto;
        padding-bottom: 373px;
      `}
    >
      {children}
    </main>
  );
};

export default Main;
