import styled from 'styled-components';

const Wrapper = styled.section`
  height: 6rem;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 1rem;

  .btn-container {
    background: var(--background-secondary-color);
    border-radius: var(--border-radius);
    display: flex;
  }

  .page-btn {
    background: transparent;
    border: none;
    width: 50px;
    height: 40px;
    font-weight: 700;
    font-size: 1.25rem;
    color: var(--primary-500);
    border-radius: var(--border-radius);
    cursor: pointer;

    &:hover {
      background: var(--primary-500);
      color: var(--white);
      transition: var(--transition);
    }
  }

  .active {
    background: var(--primary-500);
    color: var(--white);
  }

  .prev-btn,
  .next-btn {
    background: var(--background-secondary-color);
    border: none;
    border-radius: var(--border-radius);
    width: 100px;
    height: 40px;
    color: var(--primary-500);
    text-transform: capitalize;
    letter-spacing: var(--letter-spacing);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    cursor: pointer;

    &:hover {
      background: var(--primary-500);
      color: var(--white);
      transition: var(--transition);
    }
  }

  .dots {
    display: grid;
    place-items: center;
    cursor: default;
    color: var(--text-color); /* brighter dots */
  }
`;

export default Wrapper;
