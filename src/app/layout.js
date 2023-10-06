import "./globals.css";
import { Inter } from "next/font/google";

export const metadata = {
  title: "CS Team Drawer",
  description: "Sorteio de times para Counter-Strike",
};

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>
        {children}
      </body>
    </html>
  );
}
