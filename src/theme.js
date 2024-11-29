import { extendBaseTheme } from "@chakra-ui/react";

const theme = extendBaseTheme({
  components: {
    Text: {
      baseStyle: {
        fontWeight: 700,
      },
    },
  },
});

export default theme;
