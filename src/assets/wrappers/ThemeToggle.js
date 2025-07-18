import styled from 'styled-components';

const Wrapper = styled.button`
  background: transparent;
  border: none;
  width: 3.5rem;
  height: 2rem;
  display: grid;
  place-items: center;
  cursor: pointer;

  .toggle-icon {
    font-size: 1.3rem;
    color: var(--text-color);
    transition: color 0.3s ease;
  }

  &:hover .toggle-icon {
    color: var(--primary-500);
  }

  /* 🌙 Dark theme fixes */
  .dark-theme & {
    .toggle-icon {
      color: #fff; /* much brighter in dark mode */
    }

    &:hover .toggle-icon {
      color: #87eaf2; /* optional bright hover color */
    }
  }
`;

export default Wrapper;
