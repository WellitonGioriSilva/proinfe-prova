export default function SideBar() {
  return (
    <div className="w-64 bg-white shadow-md h-screen fixed top-0 left-0 z-20">
      <nav className="mt-6">
        <a
          href="/"
          className="flex items-center gap-3 px-6 py-3 text-gray-700 hover:bg-gray-100 hover:text-[#007baf] transition rounded-r-lg"
        >
          Inicio
        </a>
        <a
          href="/alunos"
          className="flex items-center gap-3 px-6 py-3 text-gray-700 hover:bg-gray-100 hover:text-[#007baf] transition rounded-r-lg"
        >
          Alunos
        </a>
      </nav>
    </div>
  );
}
