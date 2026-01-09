import { socials } from "../data/socials";

const SocialLinks = () => {
  return (
    <div className="social-links">
      {socials.map(({ icon: Icon, url }, i) => (
        <a
          key={i}
          href={url}
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          <Icon />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
