import { useEpg, Epg, Layout } from "planby";
import { Wrapper } from "./EpgWrapper.styles";
import { epgTheme as theme } from "../epgTheme";
import {
  EpgProgramItem,
  EpgChannelItem,
  EpgTimeline,
} from "../epgCustomComponents";

export const EpgWrapper = ({ epg, channels }) => {
  const { getEpgProps, getLayoutProps, onScrollToNow } = useEpg({
    epg,
    channels,
    theme,
  });

  return (
    <Wrapper>
      <Epg {...getEpgProps()} style={{ padding: 0, zIndex: 2000 }}>
        <button onClick={() => onScrollToNow()}>NOW</button>
        <Layout
          {...getLayoutProps()}
          renderProgram={({ program, ...rest }) => {
            return <EpgProgramItem program={program} {...rest} />;
          }}
          renderChannel={({ channel, ...rest }) => {
            return <EpgChannelItem channel={channel} {...rest} />;
          }}
          renderTimeline={(props) => {
            return <EpgTimeline {...props} />
          }}
        />
      </Epg>
    </Wrapper>
  );
};
