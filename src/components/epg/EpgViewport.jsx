import {
  useGetEpgData,
  useGetMemoizedChannels,
  useGetMemoizedEpg,
} from "../../hooks";
import { EpgWrapper } from "./EpgWrapper/EpgWrapper";
import { CustomSkeleton } from '../layout';

export const EpgViewport = () => {
  const { data } = useGetEpgData();
  const { channels } = useGetMemoizedChannels({ data });
  const { epg } = useGetMemoizedEpg({ data });

  return (
    <div style={{ backgroundColor: "#202020" }}>
      {epg && epg.length > 0 && channels && channels.length ? (
        <EpgWrapper epg={epg} channels={channels} />
      ) : (
        <CustomSkeleton/>
      )}
    </div>
  );
};
