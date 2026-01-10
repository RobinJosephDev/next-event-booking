import "../styles/globals.css";
import { ReactNode } from "react";
import { AuthProvider } from "../context/AuthContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Event Booking App",
  description: "Fullstack Event Booking App",
  icons: {
    icon: "/favicon.ico", // main favicon
    shortcut: "/favicon.ico",
    apple: "/favicon.ico", // use .ico for all browsers
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
          <Toaster position="top-center" reverseOrder={false} />
        </AuthProvider>
      </body>
    </html>
  );
}
