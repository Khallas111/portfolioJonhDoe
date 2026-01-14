import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";

const VoirSite = ({ slug, published }) => {
  const path = published ? `/achievements/${slug}` : "/achievements";

  return (
    <div className="btn-portfolio-wrapper">
      <Button
        as={NavLink}
        to={path}
        variant="primary"
        className="btn-portfolio"
      >
        Voir le site
      </Button>
    </div>
  );
};

export default VoirSite;
