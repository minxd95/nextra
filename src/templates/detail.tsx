import Button from '@/components/Button';
import DetailListItem from '@/components/DetailListItem';
import Layout from '@/components/Layout';
import { css } from '@emotion/react';
import { PageProps } from 'gatsby';
import { LectureDetail } from 'gatsby-node';

const LectureDetailTemplate = ({
  pageContext,
}: PageProps<any, LectureDetail>) => {
  const {
    category,
    name,
    description,
    location,
    startDateTime,
    endDateTime,
    speaker,
    stack,
  } = pageContext;
  return (
    <Layout>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          line-height: 126.4px;
          font-size: 160px;
          font-weight: 400;
          margin: 60px 0;
          color: var(--white);
        `}
      >
        <span
          css={css`
            color: var(--pink);
          `}
        >
          FE
        </span>
        <span>NEXT</span>
      </div>
      <Button type="primary">강의 담기</Button>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          border-top: 1px solid var(--white);
          margin-top: 12px;
        `}
      >
        <DetailListItem name="소개" content={description} />
        <DetailListItem name="장소" content={location} />
        <DetailListItem
          name="시간"
          content={`${startDateTime} ~ ${endDateTime}`}
        />
        <DetailListItem name="강사" content={speaker.join(', ')} />
        <DetailListItem name="기술 스택" content={stack.join(', ')} />
      </div>
    </Layout>
  );
};

export default LectureDetailTemplate;

export const Head = () => <title>Home Page</title>;
