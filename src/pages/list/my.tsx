import Layout from '@/components/Layout';
import LectureListItem from '@/components/LectureListItem';
import useMyLecture from '@/hooks/useMyLecture';
import { css } from '@emotion/react';
import * as React from 'react';

const MyLecturePage = () => {
  const { myLectures } = useMyLecture();
  const myLecturesCount = myLectures.length;

  return (
    <Layout>
      <div></div>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          line-height: 126.4px;
          font-size: 160px;
          font-weight: 400;
          margin-top: 60px;
          color: var(--white);
        `}
      >
        <span>MY</span>
        <span
          css={css`
            color: var(--pink);
          `}
        >
          CONF {myLecturesCount}
        </span>
      </div>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          border-top: 1px solid var(--white);
          margin-top: 60px;
        `}
      >
        {myLectures.map(lecture => (
          <LectureListItem
            isAdded={true}
            id={lecture.id}
            category={lecture.category}
            name={lecture.name}
            description={lecture.description}
          />
        ))}
      </div>
    </Layout>
  );
};

export default MyLecturePage;

export const Head = () => <title>Home Page</title>;
