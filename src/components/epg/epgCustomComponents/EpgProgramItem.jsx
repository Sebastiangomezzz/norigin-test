import {
  ProgramBox,
  ProgramContent,
  ProgramFlex,
  ProgramStack,
  ProgramTitle,
  ProgramText,
  useProgram,
} from "planby";

export const EpgProgramItem = ({ program, ...rest }) => {
  const { styles, formatTime, isLive } = useProgram({
    program,
    ...rest,
  });
  const { data } = program;
  const { title, since, till } = data;

  const sinceTime = formatTime(since);
  const tillTime = formatTime(till);

  return (
    <ProgramBox width={styles.width} style={styles.position}>
      <ProgramContent
        width={styles.width}
        isLive={isLive}
        style={{ padding: 0, borderRadius: 0 }}
      >
        <ProgramFlex
          style={{
            backgroundColor: isLive ? "#393939" : "#111111",
            border: "0.1px solid rgb(114,111,105, 0.2)"
          }}
        >
          {/* {isLive && isMinWidth && <ProgramImage src={image} alt="Preview" />} */}
          <ProgramStack style={{ padding: "1rem" }}>
            <ProgramTitle
              style={{ fontWeight: "normal", paddingBottom: "0.1rem" }}
            >
              {title}
            </ProgramTitle>
            <ProgramText>
              {sinceTime} - {tillTime}
            </ProgramText>
          </ProgramStack>
        </ProgramFlex>
      </ProgramContent>
    </ProgramBox>
  );
};