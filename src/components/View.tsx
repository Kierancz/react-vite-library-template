import { css as gooberCss } from "goober";

export type ViewProps = {
  children?: React.ReactNode;
  as?: React.ElementType<React.HTMLAttributes<HTMLElement>>;
  css?: Parameters<typeof gooberCss>[0];
};

export default function View({
  children,
  as: Component = "div",
  css,
  ...otherProps
}: ViewProps): JSX.Element {
  return (
    <Component className={css && gooberCss(css)} {...otherProps}>
      {children}
    </Component>
  );
}
