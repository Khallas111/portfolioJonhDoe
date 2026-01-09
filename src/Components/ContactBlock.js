import { contact } from "../data/contact";

const ContactBlock = () => {
  const { address, phone, email } = contact;

  return (
    <address>
      <a
        href={address.mapUrl}
        target="_blank"
        rel="nofollow noopener noreferrer"
      >
        {address.label.split("\n").map((line, i) => (
          <span key={i}>
            {line}
            <br />
          </span>
        ))}
      </a>

      <a href={`tel:${phone.replace(/\s/g, "")}`}>{phone}</a>
      <br />
      <a href={`mailto:${email}`}>{email}</a>
    </address>
  );
};

export default ContactBlock;
