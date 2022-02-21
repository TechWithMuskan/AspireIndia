import matrics from "./matrices";

const size = {
  font6: matrics.screenWidth * (6 / 414),
  font8: matrics.screenWidth * (8 / 414),
  font9: matrics.screenWidth * (9 / 414),
  font10: matrics.screenWidth * (10 / 414),
  font11: matrics.screenWidth * 0.029,
  font12: matrics.screenWidth * (12 / 414),
  font13: matrics.screenWidth * 0.034,
  font14: matrics.screenWidth * (14 / 414),
  font15: matrics.screenWidth * 0.04,
  font16: matrics.screenWidth * (16 / 414),
  font17: matrics.screenWidth * 0.045,
  font18: matrics.screenWidth * (18 / 414),
  font19: matrics.screenWidth * 0.05,
  font20: matrics.screenWidth * (20 / 414),
  font21: matrics.screenWidth * 0.056,
  font22: matrics.screenWidth * (22 / 414),
  font23: matrics.screenWidth * 0.061,
  font24: matrics.screenWidth * (24 / 414),
  font25: matrics.screenWidth * 0.053,
  font27: matrics.screenWidth * 0.072,
  font28: matrics.screenWidth * (28 / 414),
  font30: matrics.screenWidth * (30 / 414),
  font32: matrics.screenWidth * 0.085,
  font42: matrics.screenWidth * 0.112,
};

const weight = {
  full: "900",
  semi: "600",
  low: "400",
  bold: "bold",
  normal: "normal",
};

const type = {
  AvenirNextRegular: "AvenirNext-Regular",
  AvenirNextMedium: "AvenirNext-Medium",
  AvenirNextDemiBold: "AvenirNext-DemiBold",
  AvenirNextBold: "AvenirNext-Bold",
};

export default {
  size,
  weight,
  type,
};
