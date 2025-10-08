import "./globals.css";
import Header from "../app/componants/Header";
import Footer from "../app/componants/Footer";

export const metadata = {
  title: "Bharat Infra Solar",
  description: "One page static solar website with smooth scrolling",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
