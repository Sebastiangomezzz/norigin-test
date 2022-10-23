import { useState } from "react";
import { DateWrapper, StarWrapper } from "./EpgDayBar.styles";
import { EpgDayBarItem } from "./EpgDayBarItem";
import { getDays } from "../../../../utils";
import StarIcon from "@mui/icons-material/Star";

export const EpgDayBar = () => {
  const days = getDays();
  const [isFavourite, setIsFavourite] = useState(false);

  const handleFavourite = () => {
    setIsFavourite(!isFavourite);
  };

  return (
    <DateWrapper>
      <StarWrapper>
        <StarIcon
          sx={{ color: isFavourite ? "#d39b24" : "#393939" }}
          fontSize="large"
          onClick={handleFavourite}
        />
      </StarWrapper>
      {days.map((day, index) => (
        <EpgDayBarItem
          date={day}
          key={day.dayName + day.monthNumber}
          index={index}
        />
      ))}
    </DateWrapper>
  );
};
