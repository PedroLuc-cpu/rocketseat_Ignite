import Style from "./Avatar.module.css";

export default function Avatar({hasborder=true , src}) {
  return (
    <img
      className={hasborder ? Style.avatarWithBorder : Style.avatar}
      src={src}
      alt=""
    />
  );
}
