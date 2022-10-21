import {
  TimelineWrapper,
  TimelineBox,
  TimelineTime,
  TimelineDivider,
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
  const { time, dividers, formatTime } = useTimeline(
    numberOfHoursInDay,
    isBaseTimeFormat
  );

  const renderTime = (index) => (
    <TimelineBox key={index} width={hourWidth}>
      {console.log(renderDividers())}
      <TimelineTime
        style={{ color: "white", fontSize: "1.2rem", marginLeft: "-0.2rem" }}
      >
        {formatTime(index + offsetStartHoursRange).toLowerCase()}
      </TimelineTime>
      <TimelineDividers style={{ color: "#393939" }}>|</TimelineDividers>
    </TimelineBox>
  );

  const renderDividers = () =>
    dividers.map((_, index) => (
      <TimelineDivider key={index} width={hourWidth} />
    ));

  return (
    <TimelineWrapper
      dayWidth={dayWidth}
      sidebarWidth={sidebarWidth}
      isSidebar={isSidebar}
      style={{ zIndex: 1000 }}
    >
      {time.map((_, index) => renderTime(index))}
    </TimelineWrapper>
  );
};
