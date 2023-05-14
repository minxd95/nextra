import Layout from '@/components/Layout';
import LectureListItem from '@/components/LectureListItem';
import SearchBar from '@/components/SearchBar';
import useMyLecture from '@/hooks/useMyLecture';
import { CategoryState, Lecture, SearchState } from '@/recoil/atoms';
import { css } from '@emotion/react';
import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';

export interface LectureResponse {
  code: number;
  meta: {
    total: number;
  };
  payload: Lecture[];
}

const LectureListPage = () => {
  const { myLectures } = useMyLecture();
  const [lectures, setLectures] = useState<Lecture[]>([]);

  const search = useRecoilValue(SearchState);
  const category = useRecoilValue(CategoryState);

  const fetchLectures = async (params?: {
    category?: string;
    search?: string;
  }) => {
    const { data } = await axios.get<LectureResponse>(
      'https://nsm-dev-conf.vercel.app/api/studies',
      {
        params,
      },
    );

    setLectures(data.payload);
  };

  useEffect(() => {
    fetchLectures();
  }, []);

  useEffect(() => {
    const debounce = setTimeout(() => {
      fetchLectures({ category, search });
    }, 250);

    return () => clearTimeout(debounce);
  }, [search]);

  useEffect(() => {
    fetchLectures({ category, search });
  }, [category]);

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
        <span>CONF.</span>
        <span
          css={css`
            color: var(--pink);
          `}
        >
          LIST
        </span>
      </div>
      <SearchBar />
      <div
        css={css`
          display: flex;
          flex-direction: column;
          border-top: 1px solid var(--white);
        `}
      >
        {!!lectures.length &&
          lectures.map(lecture => (
            <LectureListItem
              isAdded={
                !!myLectures.find(_lecture => _lecture.id === lecture.id)
              }
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

export default LectureListPage;

export const Head = () => <title>Home Page</title>;
