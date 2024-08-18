import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} CookieMonster pte ltd All rights reserved.
        </p>
        <p>
          Made by cookie monster
        </p>
      </div>
    </footer>
  );
};

export default Footer;
