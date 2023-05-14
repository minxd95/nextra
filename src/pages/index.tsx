import Layout from '@/components/Layout';
import { css } from '@emotion/react';
import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';

const IndexPage = () => {
  return (
    <Layout>
      <StaticImage
        src="../images/bgText.png"
        alt="background text"
        css={css`
          width: 914px;
          height: 672px;
          position: absolute;
          z-index: 1;
        `}
      />
      <div
        css={css`
          position: absolute;
          z-index: 2;
        `}
      >
        <div
          css={css`
            display: flex;
            flex-direction: column;
            line-height: 126.4px;
            font-size: 160px;
            font-weight: 400;
            margin-top: 100px;
            color: var(--white);
          `}
        >
          <span>MEET</span>
          <span
            css={css`
              color: var(--pink);
            `}
          >
            NEW
          </span>
          <span>DEVELOP</span>
        </div>
        <div
          css={css`
            display: flex;
            flex-direction: column;
            font-size: 32px;
            line-height: 32px;
            margin-top: 72px;
            color: var(--white);
          `}
        >
          <span>NSM</span>
          <span>23.05.14 16:00</span>
          <br />
          <span
            css={css`
              font-size: 18px;
              line-height: 18px;
            `}
          >
            상금 100,000원
          </span>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
