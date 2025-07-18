import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  .job-icon {
    font-size: 1rem;
    margin-right: 1rem;
    display: flex;
    align-items: center;

    svg {
      color: var(--text-secondary-color);
    }
  }

  .job-text {
    text-transform: capitalize;
    letter-spacing: var(--letter-spacing);
    color: var(--text-color);
  }

  /* 🔷 DARK THEME FIXES */
  .dark-theme & {
    .job-icon svg {
      color: #ccc; /* brighter icon in dark mode */
    }

    .job-text {
      color: #eee; /* brighter text in dark mode */
    }
  }
`;

export default Wrapper;
