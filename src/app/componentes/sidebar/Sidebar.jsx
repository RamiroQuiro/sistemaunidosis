
import ContenedorDatosSidebar from "./ContenedorDatosSidebar";

export default function Sidebar() {
  return (
    <div className="absolute print:hidden h-full top-0 right-0 bg-white">
      <div className="flex flex-col sm:flex-row sm:justify-around z-10 pt-32">
        <ContenedorDatosSidebar/>
      </div>
    </div>
  );
}
