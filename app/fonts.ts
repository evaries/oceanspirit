import { Archivo, Archivo_Black, Roboto_Mono } from "next/font/google";

export const roboto = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--roboto",
});

export const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--archivo-black",
});

export const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
  display: "swap",
  variable: "--archivo",
});
