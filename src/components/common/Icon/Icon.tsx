import { FC } from "react";
import { ICON_DESIGNS, IconDesigns, IconSet } from "../../../constants/Icons";

type IconProps = {
  iconDesign: IconDesigns;
  iconId: string;
  size?: "1x" | "2x" | "3x" | "4x" | "5x";
};

const sizeMap = {
  "1x": "1em",
  "2x": "2em",
  "3x": "3em",
  "4x": "4em",
  "5x": "5em",
};

const Icon: FC<IconProps> = ({ iconDesign, iconId, size = "1x" }) => {
  const IconSet: IconSet = ICON_DESIGNS[iconDesign];
  const IconComponent = IconSet[iconId as keyof typeof IconSet];

  if (!IconComponent) {
    console.error(`Icon ${iconId} not found in ${iconDesign}`);
    return null;
  }

  return <IconComponent size={sizeMap[size]} />;
};

export default Icon;
