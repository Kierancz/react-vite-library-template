import View from "./components/View";
import Circle from "./components/Circle";
import { useList, useLongPress } from "react-use";

function isMouseEvent<T>(
  e: any | React.MouseEvent<T>
): e is React.MouseEvent<T> {
  const eMouse = e as React.MouseEvent<T>;
  // Can test for other properties as well
  return (
    eMouse &&
    typeof eMouse.pageX === "number" &&
    typeof eMouse.pageY === "number"
  );
}

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

export default function Component(): JSX.Element {
  type Circle = { x: number; y: number; size: number };
  const [circles, { push }] = useList<Circle>([]);
  const handleLongPress = (e: MouseEvent | TouchEvent) => {
    const size = getRandomInt(5, 150);
    const offset = size / 2;

    if (isMouseEvent(e)) {
      push({ x: e.clientX - offset, y: e.clientY - offset, size });
    } else {
      const event = e as TouchEvent;
      push({
        x: event.touches[0].clientX - offset,
        y: event.touches[0].clientY - offset,
        size,
      });
    }
  };
  const eventProps = useLongPress(handleLongPress);

  return (
    <View
      css={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100%",
      }}
      {...eventProps}
    >
      <View as="h1" css={{ fontSize: "x-large" }}>
        hello world!
      </View>
      <Circle
        size={100}
        css={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70% " }}
      />
      {circles.map(({ x, y, size }) => (
        <Circle
          key={x + "-" + y}
          size={size}
          css={{
            position: "absolute",
            left: x + "px",
            top: y + "px",
            borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70% ",
          }}
        />
      ))}
    </View>
  );
}
