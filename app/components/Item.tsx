import Image from "next/image";
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
        <Image
          className={`${blockName}__img`}
          src={img}
          alt=""
          width={128}
          height={128}
        />
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
