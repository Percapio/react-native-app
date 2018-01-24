import { Dimensions, Platform } from 'react-native';

const { height, width } = Dimensions.get('window');
export const DEVICE_HEIGHT     = height;
export const DEVICE_WIDTH      = width;

export const TILE_SIZE         = DEVICE_WIDTH * 0.3;

export const BOARD_MARGIN      = 10;
export const BOARD_HEIGHT      = DEVICE_HEIGHT * 0.96;
export const BOARD_WIDTH       = DEVICE_WIDTH;