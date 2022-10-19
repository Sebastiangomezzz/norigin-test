import { useEpg, Epg, Layout } from "planby";

export const EpgWrapper = ({ epg, channels }) => {
  const {
    getEpgProps,
    getLayoutProps,
    onScrollToNow,
    onScrollLeft,
    onScrollRight,
  } = useEpg({
    epg,
    channels
  });

  <div>
    <div style={{ height: "600px", width: "1200px" }}>
      <Epg {...getEpgProps()}>
        <Layout {...getLayoutProps()} />
      </Epg>
    </div>
  </div>;
};
