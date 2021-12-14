import {
  ColorSchemeName,
  useColorScheme as _useColorScheme,
} from 'react-native';
// https://reactnative.dev/docs/usecolorscheme
// use color scheme value always either light or dark
export default function useColorScheme(): NonNullable<ColorSchemeName> {
  return _useColorScheme() as NonNullable<ColorSchemeName>;
}
