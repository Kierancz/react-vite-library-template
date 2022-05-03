import View, { ViewProps } from "./View";

type CircleProps = {
  size: number;
  color?: string;
} & ViewProps;

export default function Circle({
  size,
  color = "#000",
  children,
  css,
  ...otherProps
}: CircleProps): JSX.Element {
  return (
    <View
      css={{
        height: size + "px",
        width: size + "px",
        borderRadius: size / 2 + "px",
        backgroundColor: color,
        ...(typeof css === "object" ? css : {}),
      }}
      {...otherProps}
    >
      {children}
    </View>
  );
}
