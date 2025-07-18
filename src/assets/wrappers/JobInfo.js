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
      transition: color 0.3s ease;
    }
  }

  .job-text {
    text-transform: capitalize;
    letter-spacing: var(--letter-spacing);
    color: var(--text-color);
    transition: color 0.3s ease;
  }

  /* 🌙 DARK THEME — Brighter */
  .dark-theme & {
    .job-icon svg {
      color: #fff; /* pure white icon */
    }

    .job-text {
      color: #fff; /* pure white text */
    }
  }
`;

export default Wrapper;
