import colors from "./colors";
import fonts from "./fonts";
import matrics from "./matrices";
import images from "./images";

var heightRef = 606;
var widthRef = 414;

const ratioHeight = matrics.screenHeight / heightRef;
const ratioWidth = matrics.screenWidth / widthRef;

export {
  heightRef,
  widthRef,
  ratioHeight,
  ratioWidth,
  colors,
  fonts,
  matrics,
  images,
};
