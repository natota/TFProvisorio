import Footer from "@/componentes/footer";
import Header from "@/componentes/header";
import Navbar from "@/componentes/navbar";
import "@/estilos/globals.css";

export const metadata = {
  title: "Hogar para peluditos",
  descripcion: "Sitio de adopción y consulta sobre animales domésticos",
  icons: {
    icon: {
      url: "/imagenes/hogar.png",
      type: "image/png"
    }
  }
}
export default function RootLayout({ children }) {
  return (
    <html lang="es-ar">
      <body className="m-5">
        <Header />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}