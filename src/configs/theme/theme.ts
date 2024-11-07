import { createTheme } from "@mui/material";

export const globalTheme = {
   dark: createTheme({
      palette: {
         mode: "dark",
         background: {
            // default: "#F1F1F1",
            // paper: "#252525",
         },
         primary: {
            main: '#FCDCAB',
         },
         fpage: {
            dark: '#000',
            main: '#fff',
            light: '#fff',
         },
      },
   }),
   light: createTheme({
      palette: {
         mode: "light",
         background: {
            default: "#FAFBFD",
         },
         primary: {
            main: '#D32F2F',      // Насичений червоний для основного кольору
            light: '#FF6659',      // Світліший відтінок червоного
            contrastText: '#fff',  // Білий текст для контрасту
         },
         secondary: {
            main: '#FCDCAB',
         },
         info: {
            main: '#F8F9FB',
            dark: '#E5E5E7',
         },
         fpage: {
            dark: '#000',
            main: '#000',
            light: '#000',
         },
      },
      components: {
         MuiButton: {
            styleOverrides: {
               root: {
                  textTransform: 'none',
               }
            }
         }
      }
   }),
};

declare module '@mui/material/styles' {

   interface PaletteOptions {
      fpage?: PaletteOptions['primary'];
   }
}

