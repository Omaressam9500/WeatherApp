
import { Dimensions, I18nManager, NativeModules, PixelRatio } from 'react-native';

const { width, height } = Dimensions.get('screen');

export enum Colors {
  appBackgroundColor = "#280659",
  mainColor = '#D94EA9',
  transparent = "transparent",
  secondColor = '#8429F5',
  tabBarColor = "#280659",
  dangerColor = '#E04F5F',
  mainTextColor = '#686868',
  secondTextColor = '#999999',
  white = '#FFFFFF',
  green = '#00ddbd',
  black = '#000000',
  gray = '#0D0E10',
  warning = '#E04F5F',
  sacandAppBackgroundColor = '#F9F9F9',
  CommonBorderColor = '#8429F5',
  inputBackground = '#341671',
  hintBackground = '#F4F7FD',
  primaryBlue = '#4785FE',
  disabledColor = '#BEBEBE',
  borderSecondColor = '#DDE9FF',
  lightRed = '#FCEEEF',
  stepColor = '#CCF2F0',
  light_blue = '#99D9F2',
  purpel = '#A97BF4',
  light_purpel = '#F9F5FF',
  yellow = '#FEA71C',
  mid_blue = "#729EF3",
  lightwhite = "#FCFCFC"



  // placeholderColor = ColorWithOpacity("#0D0E10",0.5),
}
export const Fonts = {
  black: "Roboto-Black",
  black_italic: "Roboto-BlackItalic",
  bold: "Roboto-Bold",
  bold_italic: "Roboto-BoldItalic",
  italic: "Roboto-Italic",
  light: "Roboto-Light",
  light_italic: "Roboto-LightItalic",
  medium: "Roboto-Medium",
  regular: "Roboto-Regular",

};
export enum ScreenOptions {
  StatusBarHeight = NativeModules.StatusBarManager.HEIGHT,
  HalfScreen = width / 2 - 15,
  CURRENT_RESOLUTION = Math.sqrt(height * height + width * width),
  DesignResolution = {
    width: 375,
    height: 812,
  } as any,
}


export const createPerfectPixel = (designSize = { width, height }) => {
  if (
    !designSize ||
    !designSize.width ||
    !designSize.height ||
    typeof designSize.width !== 'number' ||
    typeof designSize.height !== 'number'
  ) {
    throw new Error(
      'Invalid design size object! must have width and height fields of type Number.',
    );
  }
  const DESIGN_RESOLUTION = Math.sqrt(
    designSize.height * designSize.height + designSize.width * designSize.width,
  );
  const RESOLUTIONS_PROPORTION =
    ScreenOptions.CURRENT_RESOLUTION / DESIGN_RESOLUTION;

  return (size: number) => Math.floor(RESOLUTIONS_PROPORTION * size);
};


export const Pixel = (pixel: number) => {
  const Perfect = createPerfectPixel(ScreenOptions.DesignResolution as any);
  return Perfect(pixel);
};



