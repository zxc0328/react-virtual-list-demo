export enum DIRECTION {
  HORIZONTAL = "horizontal",
  VERTICAL = "vertical",
}

export const SCROLL_PROP = {
  [DIRECTION.VERTICAL]: "scrollTop",
  [DIRECTION.HORIZONTAL]: "scrollLeft",
};

export enum ALIGNMENT {
  AUTO = "auto",
  START = "start",
  CENTER = "center",
  END = "end",
}

export const SIZE_PROP = {
  [DIRECTION.VERTICAL]: "height",
  [DIRECTION.HORIZONTAL]: "width",
};

export const POSITION_PROP = {
  [DIRECTION.VERTICAL]: "top",
  [DIRECTION.HORIZONTAL]: "left",
};
