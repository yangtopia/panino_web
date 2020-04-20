import React from 'react';
import Container from '@material-ui/core/Container';
import styled from 'styled-components';

import HeaderComponent from '@components/HeaderComponent';

const StyledContainer = styled(Container).attrs({
  maxWidth: 'xl',
})`
  font-size: 7rem;
`;

const LayoutContainer: React.FC = ({ children }) => {
  return (
    <main>
      <HeaderComponent />
      <StyledContainer>{children}</StyledContainer>
    </main>
  );
};

export default LayoutContainer;
