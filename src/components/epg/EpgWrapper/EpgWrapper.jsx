import { useEpg, Epg, Layout } from "planby";
import { Wrapper } from "./EpgWrapper.styles";
import { epgTheme as theme } from "../epgTheme";
import {
  EpgProgramItem,
  EpgChannelItem,
  EpgTimeline,
  EpgDayBar,
} from "../epgCustomComponents";
export const EpgWrapper = ({ epg, channels }) => {
  const { getEpgProps, getLayoutProps, onScrollToNow } = useEpg({
    epg,
    channels,
    theme,
  });

  return (
    <Wrapper>
      <EpgDayBar />
      <Epg {...getEpgProps()} style={{ padding: 0, zIndex: 2000 }}>
        <button onClick={() => onScrollToNow()}>NOW</button>
        <Layout
          {...getLayoutProps()}
          renderProgram={({ program, ...rest }) => {
            return (
              <EpgProgramItem
                program={program}
                {...rest}
                key={program.id + Math.random().toString()}
              />
            );
          }}
          renderChannel={({ channel, ...rest }) => {
            return (
              <EpgChannelItem
                channel={channel}
                {...rest}
                key={channel.id + Math.random().toString()}
              />
            );
          }}
          renderTimeline={(props) => {
            return <EpgTimeline {...props} />;
          }}
        />
      </Epg>
    </Wrapper>
  );
};
