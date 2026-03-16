import type React from "react";

export type ButtonProps = React.ComponentProps<"button">;

export function Button(props: ButtonProps) {
  return <button type={"button"} {...props} />;
}
