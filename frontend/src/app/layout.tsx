import "../styles/globals.css"; 
import { ReactNode } from "react";
import { AuthProvider } from "../context/AuthContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Event Booking App",
  description: "Fullstack Event Booking App (Next.js + Node.js + PostgreSQL)",
  icons: {
    icon: "/favicon.ico",       // standard favicon for most browsers
    shortcut: "/favicon.ico",   // older browsers
    apple: "/logo.png",         // iOS devices can still use PNG
  },
};



export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <AuthProvider>
          <Navbar />
          <main className="container mx-auto min-h-screen p-6">{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
