
import "./globals.css";

export const metadata = {
  title: "Dale McBride Portfolio",
  description: "Portfolio for Dale McBride",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
