import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { IconName, library } from "@fortawesome/fontawesome-svg-core";

library.add(fab);

type Props = {
  id: string;
  title: string;
  href: string;
};

export const Social = ({ id, href, title }: Props) => {
  return (
    <a
      className="social"
      href={href}
      title={title}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={["fab", id as IconName]} />
    </a>
  );
};
