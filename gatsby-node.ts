/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { LectureResponse } from '@/pages/list';
import axios, { AxiosResponse } from 'axios';
import { CreatePagesArgs } from 'gatsby';
import path from 'path';

export interface LectureDetail {
  id: number;
  category: string;
  name: string;
  description: string;
  location: string;
  startDateTime: string;
  endDateTime: string;
  speaker: string[];
  stack: string[];
}

interface LectureDetailResponse {
  code: number;
  payload: LectureDetail;
}

exports.createPages = async ({ actions, reporter }: CreatePagesArgs) => {
  const { createPage } = actions;

  const result = await axios.get<LectureResponse>(
    'https://nsm-dev-conf.vercel.app/api/studies',
  );

  // handle errors
  if (result.status !== 200) {
    reporter.panicOnBuild(`Error while api call.`);
    return;
  }

  // Extract tag data from query
  const lectures = result.data.payload || [];

  const promises: Promise<AxiosResponse<LectureDetailResponse>>[] = [];

  // Make tag pages
  lectures.forEach(lecture => {
    promises.push(
      axios.get(`https://nsm-dev-conf.vercel.app/api/studies/${lecture.id}`),
    );
  });
  const postTemplate = path.resolve(`src/templates/detail.tsx`);

  await Promise.all(promises).then(results => {
    results.map(result => {
      createPage({
        path: `/detail/${result.data.payload.id}`,
        component: postTemplate,
        context: result.data.payload,
      });
    });
  });
};
