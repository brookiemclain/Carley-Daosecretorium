import "../styles/globals.css";

export const metadata = {
  title: "DAO Secretorium",
  description: "Creator-owned underground digital society",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        {children}
      </body>
    </html>
  );
}
