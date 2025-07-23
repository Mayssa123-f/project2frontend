export default function Footer() {
  return (
    <footer className="bg-[#0000CD] text-white p-6 font-[Poppins]">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} BonVoyage. All rights reserved.</p>
      </div>
    </footer>
  );
}
