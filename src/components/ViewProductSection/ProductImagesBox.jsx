import React from "react";

// Import Images
import viewProduct1 from "../../assets/Images/viewProduct1.png";
import viewProduct2 from "../../assets/Images/viewProduct2.png";
import viewProduct3 from "../../assets/Images/viewProduct3.png";
import viewProduct4 from "../../assets/Images/viewProduct4.png";
import viewProduct5 from "../../assets/Images/viewProduct5.png";
import viewProduct6 from "../../assets/Images/viewProduct6.png";
import {
  StyledToBeViewedImgBox,
  StyledToBeViewImagesContainer,
  StyledViewedImgBox,
} from "./ViewProductSection.style";

function ProductImagesBox() {
  return (
    <div className="ProductImagesBox">
      <StyledViewedImgBox>
        <img src={viewProduct1} alt="" className="ViewedImg" />
      </StyledViewedImgBox>
      <StyledToBeViewImagesContainer>
        <StyledToBeViewedImgBox>
          <img src={viewProduct1} alt="" className="ToBeViewedImg" />
        </StyledToBeViewedImgBox>
        <StyledToBeViewedImgBox>
          <img src={viewProduct2} alt="" className="ToBeViewedImg" />
        </StyledToBeViewedImgBox>

        <StyledToBeViewedImgBox>
          <img src={viewProduct3} alt="" className="ToBeViewedImg" />
        </StyledToBeViewedImgBox>

        <StyledToBeViewedImgBox>
          <img src={viewProduct4} alt="" className="ToBeViewedImg" />
        </StyledToBeViewedImgBox>

        <StyledToBeViewedImgBox>
          <img src={viewProduct5} alt="" className="ToBeViewedImg" />
        </StyledToBeViewedImgBox>
        <StyledToBeViewedImgBox>
          <img src={viewProduct6} alt="" className="ToBeViewedImg" />
        </StyledToBeViewedImgBox>
      </StyledToBeViewImagesContainer>
    </div>
  );
}

export default ProductImagesBox;
