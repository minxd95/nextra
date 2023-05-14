import Button from '@/components/Button';
import useMyLecture from '@/hooks/useMyLecture';
import { Lecture } from '@/recoil/atoms';
import { css } from '@emotion/react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

interface LectureListItemProps {
  isAdded: boolean;
}
const LectureListItem = ({
  isAdded,
  id,
  name,
  category,
  description,
}: LectureListItemProps & Lecture) => {
  const { deleteMyLecture, addMyLecture } = useMyLecture();
  return (
    <div
      css={css`
        display: flex;
        justify-content: space-between;
        height: 100px;
        padding-bottom: 12px;
        color: var(--white);
        border-bottom: 1px dashed var(--white);
      `}
    >
      <Link
        to={`/detail/${id}`}
        css={css`
          display: flex;
          align-items: flex-end;
          &:link {
            color: var(--white);
            text-decoration: none;
          }
          &:visited {
            color: var(--white);
            text-decoration: none;
          }
        `}
      >
        <div
          css={css`
            width: 500px;
            font-size: 72px;
          `}
        >
          <span
            css={css`
              color: var(--pink);
            `}
          >
            {category}
          </span>{' '}
          {name}
        </div>
        <span
          css={css`
            font-family: 'Pretendard';
            line-height: 140%;
            font-weight: 500;
            font-size: 16px;
          `}
        >
          {description}
        </span>
      </Link>
      <div
        css={css`
          display: flex;
          align-items: flex-end;
        `}
      >
        {isAdded ? (
          <Button
            onClick={() => {
              deleteMyLecture(id);
            }}
          >
            <StaticImage
              src="../images/minus.png"
              width={32}
              height={32}
              alt="delete button"
            />
          </Button>
        ) : (
          <Button
            onClick={() => {
              addMyLecture({ id, name, category, description });
            }}
          >
            <StaticImage
              src="../images/plus.png"
              width={32}
              height={32}
              alt="plus button"
            />
          </Button>
        )}
      </div>
    </div>
  );
};

export default LectureListItem;
