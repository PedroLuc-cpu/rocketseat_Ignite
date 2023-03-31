import { ImgHTMLAttributes} from "react";
import Style from "./Avatar.module.css";

interface AvatarPros extends ImgHTMLAttributes<HTMLImageElement> {
  hasborder?: boolean
}

export default function Avatar({hasborder=true , ...props}:AvatarPros) {
  console.log(props)

  return (
    <img
      className={hasborder ? Style.avatarWithBorder : Style.avatar}
      {...props}
    />
  );
}