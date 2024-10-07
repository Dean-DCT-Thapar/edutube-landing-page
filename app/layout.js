import "./globals.css";

export const metadata = {
  title: "Thapar EduTube",
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
