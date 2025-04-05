import { navLinks } from "../constants";
import logo from "../assets/images/logo.svg";

const Footer = () => {
  return (
    <footer className="rounded-se-5xl relative flex w-full flex-col items-center justify-center gap-20 bg-very-dark-black-blue px-48 py-32 text-white md:flex-row md:items-start xl:justify-around xl:gap-0">
      <img src={logo} alt="logo" width={100} height={100} />
      {navLinks.map((link, index) => (
        <div
          key={index}
          className="flex h-full flex-col items-start justify-center gap-1 space-y-1 "
        >
          <h3 className="font-overpass text-lg font-bold">{link.label}</h3>
          <ul className="flex flex-col space-y-2">
            {link.subLinks.map((subLink, subIndex) => (
              <li key={subIndex} className="font-overpass text-sm">
                <a href="#" className="hover:underline">
                  {subLink}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </footer>
  );
};

export default Footer;
