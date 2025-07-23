import Image from "next/image";
export default function Header() {
  return (
    <header className="bg-[#0000CD] text-white p-4 shadow-md font-[Poppins]">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Image src="/logoo.png" alt="MySite Logo" width={100} height={50} />
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="#" className="hover:text-[#7DF9FF]">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#7DF9FF]">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#7DF9FF]">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#7DF9FF]">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
