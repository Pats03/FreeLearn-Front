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
    font-size: 1.5rem;
    color: #fff; /* visible */
    transition: color 0.3s ease;
  }

  &:hover .toggle-icon {
    color: #87eaf2;
  }
`;

export default Wrapper;
