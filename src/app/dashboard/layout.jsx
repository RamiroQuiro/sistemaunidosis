import { Inter } from "next/font/google";
import Sidebar from "../componentes/sidebar/Sidebar";
import Footer from "../componentes/Footer";
import NavBar from "../componentes/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sistema Unidosis | Cepsi Eva Peron",
  description: "Generated by create next app",
};

export default function appLayout({ children }) {
  return (
    <html lang="es">
      <body className="w-full ">
        <main className="w-full relative">
          <NavBar/>
          {/* <Sidebar /> */}
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
