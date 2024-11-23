import { Desc } from "./Desc";

type Props = {
  id: string;
  blockName: string;
  title: string;
  desc: string | string[];
  img?: string;
};

export function Item({ id, blockName, title, desc, img }: Props) {
  return (
    <article className={blockName} key={id} id={id}>
      {img && (
        // eslint-disable-next-line @next/next/no-img-element
        <img className={`${blockName}__img`} src={img} alt="" />
      )}
      <div>
        <header>
          <h1>{title}</h1>
        </header>
        <Desc desc={desc} />
      </div>
    </article>
  );
}
