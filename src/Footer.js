import "./styles/footer.css";
import { Call, CopyrightOutlined } from "@mui/icons-material";

function Footer() {
  return (
    <div className="footer">
      <div className="copyright">
        <CopyrightOutlined fontSize="small" />
        <h4>2023 Ventures</h4>
      </div>
      <div className="contacts">
        <h4>Reach out to us</h4>
        <p>Get your questions answered about learning with Ventures.</p>
        <div className="ph_number">
          <Call />
          <h4>Call +91 7006133637</h4>
        </div>
      </div>
    </div>
  );
}
export default Footer;
