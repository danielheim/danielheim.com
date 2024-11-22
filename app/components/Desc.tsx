type Props = { blockName?: string; desc: string | string[]; thin?: boolean };

export function Desc({ blockName, desc, thin }: Props) {
  desc = (Array.isArray(desc) ? desc : [desc]) as string[];
  return (
    <div
      className={[
        blockName && `${blockName}__desc`,
        "desc",
        thin && "desc--thin",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {desc.map((d, i) => (
        <p key={i} dangerouslySetInnerHTML={{ __html: d }} />
      ))}
    </div>
  );
}
