import { ChannelBox, ChannelLogo } from "planby";

export const EpgChannelItem = ({ channel }) => {
  const { position, logo } = channel;
  return (
    <ChannelBox
      {...position}
      style={{
        backgroundColor: "#202020",
        boxShadow: "4px 4px rgba(0,0,0,0.2)",
      }}
    >
      <ChannelLogo
        onClick={() => console.log("channel", channel)}
        src={logo}
        alt="Logo"
      />
    </ChannelBox>
  );
};
