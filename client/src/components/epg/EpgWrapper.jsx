import { useEpg, Epg, Layout } from "planby";
import { Wrapper } from "./EpgWrapper.styles";
import { epgTheme as theme } from "./epgTheme";
import { EpgProgramItem  } from "./EpgProgramItem";
import { EpgChannelItem } from "./EpgChannelItem";

export const EpgWrapper = ({ epg, channels }) => {
  const { getEpgProps, getLayoutProps, onScrollToNow } = useEpg({
    epg,
    channels,
    theme,
  });

  return (
    <Wrapper>
      <Epg {...getEpgProps()} style={{ padding: 0 }}>
        <button onClick={() => onScrollToNow()}>NOW</button>
        <Layout
          {...getLayoutProps()}
          renderProgram={({ program, ...rest }) => {
            return <EpgProgramItem program={program} {...rest} />;
          }}
          renderChannel={({ channel, ...rest }) => {
            return <EpgChannelItem channel={channel} {...rest} />;
          }}
        />
      </Epg>
    </Wrapper>
  );
};
