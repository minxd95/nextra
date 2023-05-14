import { css } from '@emotion/react';

const styles = {
  default: css`
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  `,
  primary: css`
    padding: 10px 16px;
    background: var(--pink);
    color: var(--white);
    font-family: 'Pretendard';
    border: none;
    font-weight: 700;
    line-height: 18px;
    font-size: 18px;
    cursor: pointer;
  `,
  outlined: css`
    padding: 10px 16px;
    color: var(--white);
    font-family: 'Pretendard';
    background: none;
    border: 2px solid var(--white);
    font-weight: 700;
    line-height: 18px;
    font-size: 18px;
    cursor: pointer;
  `,
};

interface ButtonProps {
  type?: 'default' | 'primary' | 'outlined';
  children?: React.ReactNode;
  onClick?: () => void;
}

const Button = ({ type = 'default', children, onClick }: ButtonProps) => {
  return (
    <button css={styles[type]} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
