import { Wrapper } from "./EpgDayBarItem.styles";

export const EpgDayBarItem = ({ date, index }) => {
  const handleChangeDay = () => {
    console.log("change day", date);
  };

  return (
    <Wrapper
      style={{ color: index === 3 ? "white" : "#949494" }}
      onClick={handleChangeDay}
    >
      <p>{date.dayName}</p>
      <p>
        {date.dayNumber}.{date.monthNumber}.
      </p>
    </Wrapper>
  );
};
