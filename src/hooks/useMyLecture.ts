import { Lecture, MyLecutresState } from '@/recoil/atoms';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

const useMyLecture = () => {
  const [myLectures, setMyLectures] = useRecoilState(MyLecutresState);

  useEffect(() => {
    setMyLectures(
      JSON.parse(localStorage.getItem('myLectures') || '[]') as Lecture[],
    );
  }, []);

  const addMyLecture = (lecture: Lecture) => {
    const myLectures = JSON.parse(
      localStorage.getItem('myLectures') || '[]',
    ) as Lecture[];
    myLectures.push(lecture);
    localStorage.setItem('myLectures', JSON.stringify(myLectures));
    setMyLectures(myLectures);
  };
  const deleteMyLecture = (targetId: number) => {
    const myLectures = JSON.parse(
      localStorage.getItem('myLectures') || '[]',
    ) as Lecture[];
    const result = myLectures.filter(lecture => lecture.id !== targetId);
    localStorage.setItem('myLectures', JSON.stringify(result));
    setMyLectures(result);
  };

  return { myLectures, addMyLecture, deleteMyLecture };
};

export default useMyLecture;
