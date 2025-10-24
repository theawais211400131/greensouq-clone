import "./globals.css";
import Providers from "@/components/providers";
import Navbar from "@/components/Navbar";
import Footer from "./Footer";

export const metadata = {
  title: "GreenSouq Clone",
  description: "Next.js Task by Awais",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />
          {children}
          
        </Providers>
      </body>
    </html>
  );
}
