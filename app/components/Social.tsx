type Props = {
  id: string;
  title: string;
  href: string;
};

export const Social = ({ id, href, title }: Props) => {
  return (
    <a className="social" href={href} target="_blank" rel="noopener noreferrer">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`/images/social/${id}.svg`} alt={title} />
    </a>
  );
};
