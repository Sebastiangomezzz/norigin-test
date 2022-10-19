import { useMemo } from "react";
import { useGetEpgData } from "../../hooks/useGetEpgData";
import { EpgWrapper } from "./EpgWrapper";
import { useEffect } from "react";

export const ViewPort = () => {
  const { data, loading, error } = useGetEpgData();

  const channels = useMemo(
    () =>
      data?.map((channel) => {
        return {
          logo: channel.images.logo,
          uuid: channel.id,
        };
      }),
    [data]
  );
  const epg = useMemo(() => {
    let arrayOfPrograms = [];

    data?.forEach((channel) => {
      arrayOfPrograms = [
        ...arrayOfPrograms,
        ...channel?.schedules?.map((schedule) => ({
          channelUuid: channel.id,
          id: schedule.id,
          image: null,
          since: new Date(schedule.start),
          till: new Date(schedule.end),
          title: schedule.title,
        })),
      ];
    });
    return arrayOfPrograms;
  }, [data]);

  useEffect(() => {
    console.log(epg, "/-/-/", channels);
  }, [epg, channels]);

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
