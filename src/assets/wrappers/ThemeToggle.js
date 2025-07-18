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
    color: #fff; /* always bright white */
  }
`;

export default Wrapper;
