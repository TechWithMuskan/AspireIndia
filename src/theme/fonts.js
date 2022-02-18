import matrics from './metrices';

const size = {
  font6: matrics.screenWidth * (6 / 365),
  font8: matrics.screenWidth * (8 / 365),
  font9: matrics.screenWidth * (9 / 365),
  font10: matrics.screenWidth * (10 / 365),
  font11: matrics.screenWidth * 0.029,
  font12: matrics.screenWidth * (12 / 365),
  font13: matrics.screenWidth * 0.034,
  font14: matrics.screenWidth * (14 / 365),
  font15: matrics.screenWidth * 0.04,
  font16: matrics.screenWidth * (16 / 365),
  font17: matrics.screenWidth * 0.045,
  font18: matrics.screenWidth * (18 / 365),
  font19: matrics.screenWidth * 0.05,
  font20: matrics.screenWidth * (20 / 365),
  font21: matrics.screenWidth * 0.056,
  font23: matrics.screenWidth * 0.061,
  font25: matrics.screenWidth * 0.053,
  font27: matrics.screenWidth * 0.072,
  font28: matrics.screenWidth * (28 / 365),
  font30: matrics.screenWidth * (30 / 365),
  font32: matrics.screenWidth * 0.085,
  font42: matrics.screenWidth * 0.112,
};

const weight = {
  full: '900',
  semi: '600',
  low: '400',
  bold: 'bold',
  normal: 'normal',
};

const type = {
  montserratMedium: 'Montserrat-Medium',
  montserratRegular: 'Montserrat-Regular',
  montserratSemiBold: 'Montserrat-SemiBold',
  montserratBold: 'Montserrat-Bold',
};

export default {
  size,
  weight,
  type,
};
