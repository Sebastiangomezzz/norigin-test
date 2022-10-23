import {
  TimelineWrapper,
  TimelineBox,
  TimelineTime,
  TimelineDividers,
  useTimeline,
} from "planby";

export const EpgTimeline = ({
  isBaseTimeFormat,
  isSidebar,
  dayWidth,
  hourWidth,
  numberOfHoursInDay,
  offsetStartHoursRange,
  sidebarWidth,
}) => {
  const { time, formatTime } = useTimeline(
    numberOfHoursInDay,
    isBaseTimeFormat
  );

  const renderTime = (index) => (
    <TimelineBox key={index} width={hourWidth}>
      <TimelineTime
        style={{ color: "white", fontSize: "1.2rem", marginLeft: "-0.2rem" }}
      >
        {formatTime(index + offsetStartHoursRange).toLowerCase()}
      </TimelineTime>
      <TimelineDividers style={{ color: "#393939" }}>|</TimelineDividers>
    </TimelineBox>
  );

  return (
      <TimelineWrapper
        dayWidth={dayWidth}
        sidebarWidth={sidebarWidth}
        isSidebar={isSidebar}
        style={{ zIndex: 1000, border: "0.1px solid rgb(114,111,105, 0.2)" }}
      >
        {time.map((_, index) => renderTime(index))}
      </TimelineWrapper>
  );
};
