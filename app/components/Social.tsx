type Props = {
  title: string;
  href: string;
};

export const Social = ({ href, title }: Props) => {
  //   const svg = (() => {
  //     switch (props.id) {
  //       case "github":
  //         return <GithubSvg />;
  //       case "linkedin":
  //         return <LinkedinSvg />;
  //       case "twitter":
  //         return <TwitterSvg />;
  //       default:
  //         return null;
  //     }
  //   })();

  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {/* {svg} */}
      {title}
    </a>
  );
};
