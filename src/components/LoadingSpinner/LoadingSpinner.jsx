import React, { memo } from "react";
import { Wrapper, Spinner } from "./LoadingSpinner.style";

const LoadingSpinner = memo(() => {
  return (
    <Wrapper>
      <Spinner />
    </Wrapper>
  );
});

export default LoadingSpinner;
