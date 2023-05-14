import Button from '@/components/Button';
import useMyLecture from '@/hooks/useMyLecture';
import { css } from '@emotion/react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

const Header = () => {
  const { myLectures } = useMyLecture();
  const myLecturesCount = myLectures.length;

  return (
    <header
      css={css`
        max-width: 1200px;
        height: 100px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid var(--pink);
      `}
    >
      <Link to="/">
        <StaticImage src="../images/logo.png" alt="NSM DEV CONF" width={72} />
      </Link>
      <div
        css={css`
          display: flex;
          gap: 12px;
        `}
      >
        <Link to="/list/my">
          <Button type="primary">{`내 강의 ${myLecturesCount}`}</Button>
        </Link>
        <Link to="/list">
          <Button type="outlined">강의목록</Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
