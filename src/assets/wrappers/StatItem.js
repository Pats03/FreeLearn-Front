import styled from 'styled-components';

const Wrapper = styled.article`
  padding: 2rem;
  background: var(--background-secondary-color);
  border-bottom: 5px solid ${(props) => props.color || '#fff'};
  border-radius: var(--border-radius);

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .count {
    display: block;
    font-weight: 700;
    font-size: 50px;
    color: ${(props) => props.color || '#fff'};
    line-height: 2;
  }

  .title {
    margin: 0;
    text-transform: capitalize;
    letter-spacing: var(--letter-spacing);
    text-align: left;
    margin-top: 0.5rem;
    font-size: 1.25rem;
    color: #fff; /* bright title text */
  }

  .icon {
    width: 70px;
    height: 60px;
    background: ${(props) => props.bcg || '#444'};
    border-radius: var(--border-radius);
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      font-size: 2rem;
      color: ${(props) => props.color || '#fff'};
    }
  }
`;

export default Wrapper;
