import { useMemo } from "react";
import { getLogos } from "../utils/getLogos";

export const useGetMemoizedChannels = ({ data }) => {
  const channels = useMemo(
    () =>
      data?.map((channel) => {
        return {
          logo: getLogos(channel.id),
          uuid: channel.id,
        };
      }),
    [data]
  );
  return { channels };
};


