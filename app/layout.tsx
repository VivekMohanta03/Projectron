import './globals.css'
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Projectron",
  description:
    "User friendly environment for uploading personal projects and for private endorsements. ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
