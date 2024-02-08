import Footer from "@/Components/Modules/Footer";
import Navbar from "@/Components/Modules/Navbar";
import Topbar from "@/Components/Modules/Topbar";
import { AuthProvider } from "@/contexts/AuthContext";
import { CartProvider } from "@/contexts/CartContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <AuthProvider>
        <CartProvider>
          <Topbar />
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </CartProvider>
      </AuthProvider>
    </>
  );
}
