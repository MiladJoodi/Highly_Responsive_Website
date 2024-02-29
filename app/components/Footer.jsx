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
            <div className="max-w-7xl mx-auto overflow-hidden px-6 py-20 sm:py-10 lg:px-8">
                {/* First */}
                <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12">
                    {navigation?.main?.map((item) => (
                        <div key={item?.name} className="pb-6">
                            <Link className="text-sm leading-6 text-gray-600 hover:text-teal-600 duration-200" href={item?.href}>{item?.name}</Link>
                        </div>
                    ))}
                </nav>

                {/* Middle */}
                <div className="flex justify-center space-x-10 my-5">
                    {navigation?.social?.map((item) => (
                        <Link key={item?.name} href={item?.href} className="text-gray-400 hover:text-teal-400 duration-200"
                        >
                            <span className="sr-only">{item?.name}</span>
                            <item.icon className="h-6 w-6" aria-hidden="true" />
                        </Link>
                    ))}
                </div>

                {/* last */}

                    <p className="text-center text-xs leading-5 text-gray-500">
                        &copy; All rights reserved 2024. 
                        <br /><a href="https://github.com/MiladJoodi/Highly_Responsive_Website">Make with ❤️</a>
                    </p>


            </div>
        </footer>
    );
}

export default Footer;