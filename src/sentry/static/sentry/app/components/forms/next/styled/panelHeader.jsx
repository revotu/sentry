import React from 'react';
import styled from 'react-emotion';

import PanelHeading from './panelHeading';

const StyledPanelHeader = styled.div`
  border-bottom: 1px solid ${p => p.theme.borderDark};
  border-radius: ${p => p.theme.radius} ${p => p.theme.radius} 0 0;
  background: ${p => p.theme.offWhite}
  padding: 15px 20px;
`;

const StyledPanelHeaderHeading = styled(PanelHeading)`
  font-size: 13px;
  margin: 0;
`;

class PanelHeader extends React.Component {
  render() {
    return (

      <StyledPanelHeader>
        <StyledPanelHeaderHeading>
          {this.props.children}
        </StyledPanelHeaderHeading>
      </StyledPanelHeader>
    );
  }
}

export default PanelHeader;