import { ImageResponse } from "next/og";
import { logo } from "@/lib/logo";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(logo(64), { ...size });
}
