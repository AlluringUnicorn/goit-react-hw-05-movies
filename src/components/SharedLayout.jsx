import { Outlet, NavLink } from 'react-router-dom';
import { Suspense } from 'react';
import css from './SharedLayout.module.css';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;

const SharedLayout = () => {
  return (
    <>
      <header className={css.header}>
        <nav className={css.nav}>
          <StyledLink to="/" className={css.navlink}>
            Home
          </StyledLink>
          <StyledLink to="/movies" className={css.navlink}>
            Movies
          </StyledLink>
        </nav>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <main className={css.main}>
          <Outlet />
        </main>
      </Suspense>
    </>
  );
};

export default SharedLayout;
