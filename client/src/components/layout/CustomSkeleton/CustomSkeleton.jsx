import Skeleton from "@mui/material/Skeleton";

export const CustomSkeleton = () => {
  return (
    <>
      <Skeleton
        variant="text"
        width={"100%"}
        height={"3rem"}
        animation="pulse"
        sx={{ backgroundColor: "#393939" }}
      />
      <Skeleton
        variant="text"
        width={"100%"}
        height={"3rem"}
        animation="pulse"
        sx={{ backgroundColor: "#393939" }}
      />
      <Skeleton
        variant="text"
        width={"100%"}
        height={"50rem"}
        animation="pulse"
        sx={{ backgroundColor: "#393939" }}
      />
    </>
  );
};
