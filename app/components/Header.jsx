"use client"
import Image from 'next/image'
import Link from 'next/link'
import { Fragment, useState } from 'react'
import LogoImage from '@/public/images/tailwind-logo.png'
import LogoText from '@/public/images/logo-text.png'
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import { ChevronDownIcon } from "@heroicons/react/20/solid"

const sectionDesigns = [
  { name: "Header Sections", href: "/headersections" },
  { name: "Hero Sections", href: "/herosections" },
  { name: "Feature Sections", href: "/featuresections" },
  { name: "Pricing Sections", href: "/pricingsections" },
  { name: "Newsletter Sections", href: "/newslettersections" },
  { name: "Promo Sections", href: "/promosections" },
  { name: "Blog Sections", href: "/blogsections" },
  { name: "Contact Sections", href: "/contactsections" },
  { name: "Team Sections", href: "/teamsections" },
  { name: "Content Sections", href: "/contentsections" },
  { name: "Banner Sections", href: "/bannersections" },
  { name: "CTA Sections", href: "/ctasections" },
  { name: "Testimonial Sections", href: "/testimonialsections" },
];
const pagesDesigns = [
  { name: "Storfront Pages", href: "/storefrontpages" },
  { name: "Product Pages", href: "/productpages" },
  { name: "Shopping Cart Pages", href: "/shoppingcartpages" },
  { name: "Category Pages", href: "/categorypages" },
  { name: "Checkout Pages", href: "/checkoutpages" },
  { name: "Order Details Pages", href: "/orderdetailspages" },
  { name: "Order History Pages", href: "/orderhistorypages" },
  { name: "Landing Pages", href: "/landingpages" },
  { name: "Home Pages", href: "/homepages" },
  { name: "Pricing Pages", href: "/pricingpages" },
  { name: "About Pages", href: "/aboutpages" },
  { name: "Details Pages", href: "/detailspages" },
  { name: "Settings Pages", href: "/settingspages" },
];

const Header = () => {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  function classNames(...classes){
    return classes.filter(Boolean).join(" ")
  }

  return (
    <header className='bg-gray-950 text-gray-200 sticky top-0 z-40'>
      <nav className='mx-auto max-w-7xl flex items-center justify-between h-20 px-4 lg:px-8'>

        {/* LEFT */}
        <Link href={"/"}>
          <Image
            src={LogoImage}
            alt='logo'
            className="h-16 w-auto scale-90 hover:scale-105 duration-200"              >
          </Image>
        </Link>

        {/* CENTER */}
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Link href={"/"} className='headerList'>Home</Link>
          <Link href={"/features"} className='headerList'>Features</Link>
          <Link href={"/unknown"} className='headerList'>Not Found</Link>

          {/* POP OVER ONE */}
          <Popover className="relative">
            <Popover.Button className="headerList flex items-center gap-x-1">
              Page Designs <ChevronDownIcon className='w-5 h-5 flex-none' />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-56 rounded-xl bg-white p-2 shadow-lg ring-1 ring-gray-900/5">
                {
                  pagesDesigns?.map((item) => (
                    <Link key={item?.name} href={item?.href} className="block rounded-lg px-3 py-2 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-200">
                      {item?.name}
                    </Link>
                  ))
                }
              </Popover.Panel>
            </Transition>

          </Popover>

          {/* POP OVER TWO */}
          <Popover className="relative">
            <Popover.Button className="headerList flex items-center gap-x-1">
              Tailwind Designs <ChevronDownIcon className='w-5 h-5 flex-none' />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-56 rounded-xl bg-white p-2 shadow-lg ring-1 ring-gray-900/5">
                {
                  sectionDesigns?.map((item) => (
                    <Link key={item?.name} href={item?.href} className="block rounded-lg px-3 py-2 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-200">
                      {item?.name}
                    </Link>
                  ))
                }
              </Popover.Panel>
            </Transition>

          </Popover>


        </Popover.Group>

        {/* RIGHT */}
        <div className='hidden lg:flex'>
          <Link href={"/contactme"} className='headerList'>
            Contact Me <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>

        {/* MOBILE MENU */}
        <div className='flex lg:hidden'>
          <button type="button" onClick={() => setMobileMenuOpen(true)} className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200 hover:text-teal-200 duration-200'>
            <span className='sr-only'>Open main menu</span>
            <Bars3Icon className='h-7 w-7' aria-hidden="true" />
          </button>
        </div>

      </nav>

      {/* Mobile navigation menu start */}
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className='fixed inset-0 z-50'>
          <Dialog.Panel className="fixed inset-y-0 right-0 w-full overflow-y-auto bg-gray-950 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className='flex items-center justify-between'>
              <Link href={"/"}>
                <Image
                  src={LogoText}
                  alt='logo'
                  className="h-16 w-auto"
                >
                </Image>
              </Link>

              <button
                type='button'
                className='-m-2.5 rounded-md p-2.5 text-white hover:text-red-500 duration-200'
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className='sr-only'>Close menu</span>
                <XMarkIcon className='h-6 w-6' aria-hidden="true" />
              </button>
            </div>

            <div className="mt-6 flow-root text-gray-200">
              <div className="-my-6 divide-y divide-gray-100/20">
                <div className='space-y-2 py-6'>
                  <Link
                    href={"/"}
                    onClick={() => setMobileMenuOpen(false)}
                    className='-mx-3 block rounded-lg px-3 py-2 text-base hover:bg-gray-800 hover:text-white duration-200 font-semibold'
                  >
                    Home
                  </Link>

                  <Link
                    href={"/features"}
                    onClick={() => setMobileMenuOpen(false)}
                    className='-mx-3 block rounded-lg px-3 py-2 text-base hover:bg-gray-800 hover:text-white duration-200 font-semibold'
                  >
                    Features
                  </Link>

                  <Link
                    href={"/not-found"}
                    onClick={() => setMobileMenuOpen(false)}
                    className='-mx-3 block rounded-lg px-3 py-2 text-base hover:bg-gray-800 hover:text-white duration-200 font-semibold'
                  >
                    Not Found
                  </Link>

                <Disclosure as='div' className='-mx-3'>
                  {({open})=>(
                    <>
                    <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-800 hover:text-white duration-200">
                      Pages Designs {" "}
                      <ChevronDownIcon
                      className={classNames(
                        open ? "rotate-180" : "",
                        "h-5 w-5 flex-none"
                      )}
                      aria-hidden="true"
                      />
                      </Disclosure.Button>
                    </>
                  )}
                </Disclosure>

                </div>
              </div>
            </div>

          </Dialog.Panel>
        </div>

      </Dialog>
      {/* Mobile navigation menu end */}

    </header>
  )
}

export default Header