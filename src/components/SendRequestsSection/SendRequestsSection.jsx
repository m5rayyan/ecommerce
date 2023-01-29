import React from "react";
import Container from "../global/Container/Container";
import SendRequestsContent from "./SendRequestsContent";

import { StyledSendRequestsSection } from "./SendRequestsSection.style";

function SendRequestsSection() {
  return (
    <StyledSendRequestsSection>
      <Container>
        <SendRequestsContent />
      </Container>
    </StyledSendRequestsSection>
  );
}

export default SendRequestsSection;
