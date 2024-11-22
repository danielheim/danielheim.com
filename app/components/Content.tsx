import { PropsWithChildren } from "react";
import { Desc } from "./Desc";

type Props = {
  id: string;
  blockName: string;
  isHeadingLarge?: boolean;
  title: string;
  subtitle?: string;
  desc?: string | string[];
  children?: React.ReactNode;
};

export function Content({
  id,
  blockName,
  isHeadingLarge,
  title,
  subtitle,
  desc,
  children,
}: PropsWithChildren<Props>) {
  return (
    <div id={id} className={blockName}>
      <header>
        <h1
          className={[
            "heading",
            isHeadingLarge && "heading--large",
            `${blockName}__title`,
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {title}
        </h1>
        {subtitle && <p className={`${blockName}__subtitle`}>{subtitle}</p>}
      </header>
      {desc && <Desc blockName={blockName} desc={desc} thin={true} />}
      {children}
    </div>
  );
}
