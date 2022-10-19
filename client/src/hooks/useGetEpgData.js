import { useQuery } from "@tanstack/react-query";
import { useCallback } from "react";

export const useGetEpgData = () => {
    const getEpgData = useCallback(async () => {
        const response = await fetch("http://localhost:1337/epg");
        const data = await response.json();
        return data.channels;
    }, []);
  const { data, loading, error } = useQuery(["epgData"], getEpgData);
  return { data, loading, error };
};
