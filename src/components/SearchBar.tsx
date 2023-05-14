import { CategoryState, SearchState } from '@/recoil/atoms';
import { css } from '@emotion/react';
import { StaticImage } from 'gatsby-plugin-image';
import { useRecoilState } from 'recoil';

const SearchBar = () => {
  const [search, setSearch] = useRecoilState(SearchState);
  const [category, setCategory] = useRecoilState(CategoryState);

  return (
    <div
      css={css`
        display: flex;
        justify-content: space-between;
        margin-bottom: 12px;
      `}
    >
      <div
        css={css`
          position: relative;
        `}
      >
        <select
          css={css`
            width: 144px;
            height: 38px;
            appearance: none;
            background: none;
            padding: 10px 16px;
            border: 1px solid var(--white);
            border-radius: 0px;
            font-family: 'Pretendard';
            font-size: 18px;
            font-weight: 800;
            color: var(--white);
            line-height: 100%;
            &:focus {
              outline: none;
            }
          `}
          onChange={e => setCategory(e.target.value)}
        >
          <option value="">전체</option>
          <option value="FE">FE</option>
          <option value="BE">BE</option>
          <option value="APP">APP</option>
        </select>
        <StaticImage
          src="../images/down.png"
          alt="drop down"
          css={css`
            position: absolute;
            width: 12px;
            height: 12px;
            right: 12px;
            top: 13px;
            pointer-events: none;
          `}
        />
      </div>
      <div
        css={css`
          position: relative;
        `}
      >
        <input
          type="text"
          onChange={e => setSearch(e.target.value)}
          value={search}
          placeholder="검색하세요."
          css={css`
            width: 190px;
            height: 38px;
            appearance: none;
            background: none;
            border: 1px solid var(--white);
            padding: 10px 16px;
            font-family: 'Pretendard';
            color: var(--white);
            font-weight: 500;
            &:focus {
              outline: none;
            }
            &::placeholder {
              color: rgba(255, 255, 255, 0.5);
            }
          `}
        />
        <StaticImage
          src="../images/search.png"
          alt="search"
          css={css`
            position: absolute;
            width: 18px;
            height: 18px;
            right: 16px;
            top: 10px;
            pointer-events: none;
          `}
        />
      </div>
    </div>
  );
};

export default SearchBar;
