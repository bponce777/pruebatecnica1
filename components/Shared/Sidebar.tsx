import Link from "next/link"
import { Menu } from "lucide-react"

export default function Sidebar() {
  return (
    <div className="border-r w-48 p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-medium">Menú</h2>
        <Menu className="h-5 w-5" />
      </div>
      <nav className="space-y-2">
        <Link
          href="#"
          className="block py-1 px-2 hover:bg-gray-100 text-sm border-l-2 border-transparent hover:border-gray-300"
        >
          Opción Easy
        </Link>
        <Link
          href="#"
          className="block py-1 px-2 hover:bg-gray-100 text-sm border-l-2 border-transparent hover:border-gray-300"
        >
          Opción Medium
        </Link>
        <Link
          href="#"
          className="block py-1 px-2 hover:bg-gray-100 text-sm border-l-2 border-transparent hover:border-gray-300"
        >
          Opción Hard
        </Link>
      </nav>
    </div>
  )
}