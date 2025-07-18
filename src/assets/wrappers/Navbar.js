import styled from 'styled-components';

const Wrapper = styled.nav`
  height: var(--nav-height);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);
  background-color: black;

  .nav-center {
    display: flex;
    width: 90vw;
    align-items: center;
    justify-content: space-between;
  }

  .toggle-btn {
    background: transparent;
    border: none;
    font-size: 1.75rem;
    color: var(--primary-500);
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  .logo-text {
    display: none;
    color: #f78672;
    font-weight: bold;
  }

  .logo {
    display: flex;
    align-items: center;
    width: 100px;
  }

  .btn-container {
    display: flex;
    align-items: center;
    gap: 1rem;

    button,
    svg,
    .theme-toggle {
      color: #fff; /* ensure visibility */
      font-size: 1.2rem;
    }

    .theme-toggle:hover {
      color: var(--primary-500);
    }
  }

  @media (min-width: 992px) {
    position: sticky;
    top: 0;

    .nav-center {
      width: 90%;
    }

    .logo {
      display: none;
    }

    .logo-text {
      display: block;
    }
  }
`;

export default Wrapper;
