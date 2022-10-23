import { useMemo } from "react";

export const useGetMemoizedEpg = ({data}) => {
    const epg = useMemo(() => {
      let arrayOfPrograms = [];

      data?.forEach((channel) => {
        arrayOfPrograms = [
          ...arrayOfPrograms,
          ...channel?.schedules?.map((schedule) => ({
            channelUuid: channel.id,
            id: schedule.id + Math.random(),
            image: "",
            description: schedule.title,
            since: new Date(schedule.start),
            till: new Date(schedule.end),
            title: schedule.title,
          })),
        ];
      });
      return arrayOfPrograms;
    }, [data]);
    return { epg };
}
