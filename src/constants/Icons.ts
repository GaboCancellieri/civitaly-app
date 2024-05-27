import * as AntDesign from "react-icons/ai";
import * as BootstrapIcons from "react-icons/bs";
import * as BoxIcons from "react-icons/bi";
import * as CircumIcons from "react-icons/ci";
import * as CSSIcons from "react-icons/cg";
import * as Devicons from "react-icons/di";
import * as FeatherIcons from "react-icons/fi";
import * as FlatColorIcons from "react-icons/fc";
import * as FontAwesome5 from "react-icons/fa";
import * as FontAwesome6 from "react-icons/fa6";
import * as GameIcons from "react-icons/gi";
import * as GitHubIcons from "react-icons/go";
import * as GrommetIcons from "react-icons/gr";
import * as Heroicons from "react-icons/hi";
import * as Heroicons2 from "react-icons/hi2";
import * as IcoMoon from "react-icons/im";
import * as Icons8 from "react-icons/lia";
import * as Ionicons4 from "react-icons/io";
import * as Ionicons5 from "react-icons/io5";
import * as LucideIcons from "react-icons/lu";
import * as MaterialDesign from "react-icons/md";
import * as PhosphorIcons from "react-icons/pi";
import * as RadixIcons from "react-icons/rx";
import * as RemixIcons from "react-icons/ri";
import * as SimpleIcons from "react-icons/si";
import * as SimpleLineIcons from "react-icons/sl";
import * as TablerIcons from "react-icons/tb";
import * as ThemifyIcons from "react-icons/tfi";
import * as Typicons from "react-icons/ti";
import * as VSCodeIcons from "react-icons/vsc";
import * as WeatherIcons from "react-icons/wi";

export const ICON_DESIGNS = {
  AntDesign,
  BootstrapIcons,
  BoxIcons,
  CircumIcons,
  CSSIcons,
  Devicons,
  FeatherIcons,
  FlatColorIcons,
  FontAwesome5,
  FontAwesome6,
  GameIcons,
  GitHubIcons,
  GrommetIcons,
  Heroicons,
  Heroicons2,
  IcoMoon,
  Icons8,
  Ionicons4,
  Ionicons5,
  LucideIcons,
  MaterialDesign,
  PhosphorIcons,
  RadixIcons,
  RemixIcons,
  SimpleIcons,
  SimpleLineIcons,
  TablerIcons,
  ThemifyIcons,
  Typicons,
  VSCodeIcons,
  WeatherIcons,
};

export type IconDesigns = keyof typeof ICON_DESIGNS;
type IconComponentType = React.ComponentType<{ size?: string | number }>;

export type IconSet = {
  [key: string]: IconComponentType;
};
