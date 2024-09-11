import styled from 'styled-components';

const Loader = styled.div`
  border: 8px solid #f3f3f3; 
  border-top: 8px solid #3498db;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  margin: 0 auto;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

export default Loader;