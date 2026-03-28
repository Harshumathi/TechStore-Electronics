interface FooterProps {
  onScrollTop: () => void;
}

const Footer = ({ onScrollTop }: FooterProps) => {
  return (
    <footer className="footer">
      <p>&copy; 2026 TechStore. All rights reserved.</p>
      <button
        onClick={onScrollTop}
        style={{
          cursor: "pointer",
          position: "fixed",
          bottom: "30px",
          right: "30px",
          width: "22px",
          height: "21px",
          fontWeight: "bold",
          fontSize: "1.5rem",
          borderRadius: "50%",
        }}
      >
        ^
      </button>
    </footer>
  );
};

export default Footer;
