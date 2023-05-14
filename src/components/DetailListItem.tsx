import { css } from '@emotion/react';

interface DetailListItemProps {
  name: string;
  content: string;
}

const DetailListItem = ({ name, content }: DetailListItemProps) => {
  return (
    <div
      css={css`
        height: 72px;
        display: flex;
        align-items: center;
        font-family: 'Pretendard';
        color: var(--white);
        border-bottom: 1px dashed var(--white);
      `}
    >
      <div
        css={css`
          width: 100px;
          font-size: 16px;
          font-weight: 800;
        `}
      >
        {name}
      </div>
      <div
        css={css`
          font-size: 16px;
          font-weight: 500;
        `}
      >
        {content}
      </div>
    </div>
  );
};

export default DetailListItem;
