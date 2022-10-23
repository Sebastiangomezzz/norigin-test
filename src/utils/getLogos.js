
export const getLogos = (channel) => {
  const logos = {
    silver:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Silver_logo.svg/1200px-Silver_logo.svg.png",
    sky1: "data:image/jpeg;base64,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",
    hbo: "data:image/png;base64,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",
    cw: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/The_CW.svg/800px-The_CW.svg.png",
    vox: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Vox.no_logo.png",
    history:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/History_Logo.svg/1200px-History_Logo.svg.png",
    sixx: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Sixx.svg/1200px-Sixx.svg.png",
    tv2norway:
      "https://logos-world.net/wp-content/uploads/2021/11/TV-2-Norway-Logo.png",
    channel5:
      "https://creativereview.imgix.net/content/uploads/2016/02/5LOGO.jpg?auto=compress,format&q=60&w=622&h=400",
  };
  return logos[channel];
};