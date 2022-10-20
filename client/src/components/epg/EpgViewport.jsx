import {
  useGetEpgData,
  useGetMemoizedChannels,
  useGetMemoizedEpg,
} from "../../hooks";
import { EpgWrapper } from "./EpgWrapper";

export const EpgViewport = () => {
  const { data } = useGetEpgData();
  const { channels } = useGetMemoizedChannels({ data });
  const { epg } = useGetMemoizedEpg({ data });

  return (
    <div>
      {epg && epg.length > 0 && channels && channels.length ? (
        <EpgWrapper epg={epg} channels={channels} />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};
