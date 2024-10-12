import { ReactSVG } from "react-svg";

interface Props {
  size: number
  color: string
  style?: React.CSSProperties
}

function Power({ size = 24, color, style }: Props) {
  const info = `

<?xml version="1.0" encoding="utf-8"?>
<svg viewBox="-73.6792 -81.4475 681.1382 542.1176" fill=${color}  width="681.1382" height="542.1176" xmlns="http://www.w3.org/2000/svg">
  <path d="M 175.864 460.67 L -52.136 236.054 C -122.396 175.863 -3.32 58.9 55.473 129.915 L 180.464 251.518 L 487.655 -66.342 C 506.823 -106.175 640.331 -64.937 599.864 30.376 L 175.864 460.67 Z" style=""/>
</svg>

`;

  return <ReactSVG src={info} width={size} height={size} style={{ ...style }} />
}



export default Power