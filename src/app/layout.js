// app/layout.js or app/RootLayout.js

import "./globals.css";
import Header from "../app/componants/Header";
import Footer from "../app/componants/Footer";
// 👈 Import the new component
import FloatingContact from "../app/componants/FloatingContact"; 

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
        {/* 👈 Add the component here */}
        <FloatingContact />
      </body>
    </html>
  );
}