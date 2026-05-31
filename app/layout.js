import "./globals.css";

export const metadata = {
  title: "CommunityFirst Healthcare Consulting",
  description: "Practical operations and financial support for rural healthcare leaders.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
