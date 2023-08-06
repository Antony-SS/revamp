import { extendTheme } from "@chakra-ui/react";


function CreateTheme(bgColor) {

  const Theme = extendTheme({
    fonts: {
      body: "Playfair Display, serif",
      heading: "Oswald, sans-serif",
    },
    styles: {
      global: {
        body: {
          bg: bgColor, // desired background color
        },
      },
    },
  });

  return Theme;
}
  
export default CreateTheme;
  