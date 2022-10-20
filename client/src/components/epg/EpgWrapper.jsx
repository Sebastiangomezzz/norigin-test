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
    channels,
    itemHeight: 90,
  });

  return (
    <div>
      <button onClick={() => onScrollToNow()}>NOW</button>
      <Epg {...getEpgProps()}>
        <Layout {...getLayoutProps()} />
      </Epg>
    </div>
  );
};
