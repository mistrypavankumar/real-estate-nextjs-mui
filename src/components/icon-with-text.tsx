import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "next/link";

const IconWithText = ({
  Icon,
  text,
  href = "#",
}: {
  Icon: React.JSX.Element;
  text?: string;
  href?: string;
}) => {
  return (
    <Box
      component={Link}
      href={href}
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
        borderRight: "1px solid",
        borderRightColor: "secondary.A100",
        pr: 2,
        "&:last-of-type": {
          borderRight: "none",
          pr: 0,
        },
        textTransform: "none",
        textDecoration: "none",
        color: "inherit",
      }}
    >
      {Icon}
      {text && (
        <Typography
          variant="body2"
          component="span"
          sx={{
            color: "secondary.light",
            "&:hover": { color: "secondary.main" },
          }}
        >
          {text}
        </Typography>
      )}
    </Box>
  );
};

export default IconWithText;
