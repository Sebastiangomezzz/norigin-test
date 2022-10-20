import { useEpg, Epg, Layout } from "planby";
import { Wrapper } from "./EpgWrapper.styles";
import { epgTheme as theme } from "./epgTheme";

export const EpgWrapper = ({ epg, channels }) => {
  
  const { getEpgProps, getLayoutProps, onScrollToNow } = useEpg({
    epg,
    channels,
    theme
  });

  return (
    <Wrapper>
      <Epg {...getEpgProps()} style={{ padding: 0 }}>
        <button onClick={() => onScrollToNow()}>NOW</button>
        <Layout {...getLayoutProps()} />
      </Epg>
    </Wrapper>
  );
};
