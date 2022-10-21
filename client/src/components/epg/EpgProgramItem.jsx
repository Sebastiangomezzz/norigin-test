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
        style={{ padding: 0, margin: 0, borderRadius: 0 }}
      >
        <ProgramFlex
          style={{ backgroundColor: isLive ? "#393939" : "#111111", padding:0, margin:0 }}
        >
          {/* {isLive && isMinWidth && <ProgramImage src={image} alt="Preview" />} */}
          <ProgramStack style={{padding:'1rem'}}>
            <ProgramTitle>{title}</ProgramTitle>
            <ProgramText>
              {sinceTime} - {tillTime}
            </ProgramText>
          </ProgramStack>
        </ProgramFlex>
      </ProgramContent>
    </ProgramBox>
  );
};