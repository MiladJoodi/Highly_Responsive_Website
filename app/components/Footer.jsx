import Link from "next/link";
import { FaFacebook, FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {

    const navigation = {
        main: [
          { name: "Home", href: "/" },
          { name: "Features", href: "/features" },
          { name: "Pages Designs", href: "/pagesdesigns" },
          { name: "Tailwindcss Designs", href: "/tailwindcssdesigns" },
          { name: "Free Projects", href: "/freeprojects" },
          { name: "Contact Me", href: "/contactme" },
        ],
        social: [
          {
            name: "Facebook",
            href: "#",
            icon: FaFacebook,
          },
          {
            name: "Instagram",
            href: "#",
            icon: FaInstagram,
          },
          {
            name: "X",
            href: "#",
            icon: FaXTwitter,
          },
          {
            name: "GitHub",
            href: "#",
            icon: FaGithub,
          },
          {
            name: "YouTube",
            href: "#",
            icon: FaYoutube,
          },
        ],
      };


    return (
        <footer className="bg-white border-t border-t-teal-100">
            <div className="max-w-7xl overflow-hidden px-6 py-20 sm:py-10 lg:px-8">
                {/* First */}
                <nav>
                    {navigation?.main?.map((item)=>(
                        <div key={item?.name} className="pb-6">
                            <Link href={item?.href}>{item?.name}</Link>
                        </div>
                    ))}
                </nav>
            </div>
        </footer>
    );
}

export default Footer;