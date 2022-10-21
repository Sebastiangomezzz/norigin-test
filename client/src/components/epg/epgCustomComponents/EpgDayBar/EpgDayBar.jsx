import React from "react";
import { Wrapper } from "./EpgDayBar.styles";
import { EpgDayBarItem } from "./EpgDayBarItem";
import { getDays } from "../../../../utils";

export const EpgDayBar = () => {
  const days = getDays();
  return <Wrapper>EpgDayBar</Wrapper>;
};
