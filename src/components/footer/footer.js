/** @jsx jsx */
import { jsx, Box, Container, Image, Text } from "theme-ui";
import { Link } from "components/link";
import { Link as ScrollLink } from "react-scroll";
import data from "./footer.data";
import FooterLogo from "assets/logo.png";

export default function Footer() {
  return (
    <footer sx={styles.footer}>
      <Container>
        <Box sx={styles.footer.footerBottomArea}>
          <ScrollLink
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            style={{ cursor: "pointer" }}
          >
            <Image
              src={FooterLogo}
              alt="Logo"
              sx={{
                height: 50,
              }}
            />
          </ScrollLink>
          <Box sx={styles.footer.menus}>
            <nav>
              {data.menuItem.map((item, i) => (
                <Link
                  path={item.path}
                  key={i}
                  label={item.label}
                  sx={styles.footer.link}
                  target="_blank"
                />
              ))}
            </nav>
          </Box>
          <Text sx={styles.footer.copyright}>
            Copyright &copy; {new Date().getFullYear()}. Developed by
            <Link
              sx={styles.footer.developedBy}
              path="https://www.upwork.com/o/profiles/users/~01f5a00c5d3ba62efc/"
              target="_blank"
            >
              Mutahhar bin Muzaffar.
            </Link>
            All Rights Reserved.
          </Text>
        </Box>
      </Container>
    </footer>
  );
}

const styles = {
  footer: {
    footerBottomArea: {
      borderTop: "1px solid",
      borderTopColor: "border_color",
      display: "flex",
      pt: [7, null, 2],
      pb: ["40px", null, "25px"],
      textAlign: "center",
      flexDirection: "column",
    },
    menus: {
      mt: [3, 4],
      mb: 2,
      nav: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
      },
    },

    link: {
      fontSize: [1, "15px"],
      color: "text",
      fontWeight: "400",
      mb: 2,
      cursor: "pointer",
      transition: "all 0.35s",
      display: "block",
      textDecoration: "none",
      lineHeight: [1.5, null, 1.8],
      px: [2, null, 4],
      ":hover": {
        color: "primary",
      },
    },
    developedBy: {
      fontSize: [1, "15px"],
      color: "primary",
      fontWeight: "500",
      cursor: "pointer",
      transition: "all 0.35s",
      display: "inline",
      px: "5px",
      "@media screen and (max-width: 1024px)": {
        display: "block",
        px: [2, null, 4],
      },
      textDecoration: "none",
      ":hover": {
        color: "primary",
      },
    },
    copyright: {
      fontSize: [1, "15px"],
      width: "100%",
    },
  },
};
