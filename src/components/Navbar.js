"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import BookAuditButton from "./BookAuditButton";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownOpen2, setDropdownOpen2] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // To avoid hydration issues, render dropdown only after client mount
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollWithOffset = (el, offset = 100) => {
    const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const solutions = [
    { id: "ai-sdr", title: "AI SDR" },
    { id: "ai-project-manager", title: "AI Project Manager" },
    { id: "ai-marketing-suite", title: "AI Marketing Suite" },
    { id: "ai-secretary", title: "AI Secretary" },
    { id: "ai-customer-support", title: "AI Customer Support" },
    { id: "ai-business-partner", title: "AI Business Partner" },
  ];

  const industries = [
    { id: "e-commerce", title: "E-Commerce" },
    { id: "agencies", title: "Agencies" },
    { id: "real-estate", title: "Real Estate" },
    { id: "insurance", title: "Insurance" },
    { id: "law-firms", title: "Law Firms" },
    { id: "coaches-and-consultants", title: "Coaches & Consultants" },
    {
      id: "small-medium-enterprises",
      title: "Small & Medium Sized Enterprises",
    },
  ];

  const goToPage = (pageId) => {
    router.push(pageId);
    setMobileMenuOpen(false);
  };

  const handleClick = (targetId) => {
    if (pathname === "/") {
      const el = document.getElementById(targetId);
      if (el) scrollWithOffset(el, 100);
    } else {
      router.push("/", undefined, { scroll: false }); // navigate without scroll
      // Consider additional logic to scroll after navigation or use a context to trigger scrolling
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className="fixed max-w-[98vw] md:max-w-[90vw] w-full mx-auto top-1 md:top-3 rounded-full left-[50%] translate-x-[-50%] flex items-center h-16 z-50 backdrop-blur-lg bg-white/10 shadow-lg"
      role="navigation"
      aria-label="Main Navigation"
    >
      <div className="mx-auto w-full flex items-center justify-between px-3 md:px-8">
        <Link href="/" aria-label="Home">
          <div className="flex z-20 items-center md:space-x-2 cursor-pointer">
            <Image
              src="/logo-light.png"
              alt="Aeontrix logo"
              width={320}
              height={80}
              className="w-40 md:w-44"
              priority
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden xl:flex h-16 items-center space-x-6 xl:space-x-10 text-[#F8F9FB] font-medium">
          {/* Solutions */}
          <div
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
            className="relative flex items-center h-full"
          >
            <button
              aria-haspopup="true"
              aria-expanded={dropdownOpen}
              onClick={() => setDropdownOpen((open) => !open)}
              className="flex hover:text-[#00FF93] transition-all duration-200 items-center cursor-pointer gap-1 focus:outline-none"
            >
              Solutions <ChevronDown size={16} aria-hidden="true" />
            </button>
            <AnimatePresence>
              {dropdownOpen && mounted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ type: "tween", duration: 0.12 }}
                  className="absolute overflow-hidden top-full mt-1 dropdown-div bg-[#0F1114] border border-white/10 rounded-lg shadow-[#00FF93]/10 shadow w-56 z-50"
                  role="menu"
                  aria-label="Solutions submenu"
                >
                  {solutions.map((item) => (
                    <Link key={item.id} href={`/solutions/${item.id}`}>
                      <button
                        className="w-full text-left px-4 py-3 hover:text-[#00FF93] transition-all duration-200 cursor-pointer hover:bg-[#1A1D21] text-white"
                        role="menuitem"
                      >
                        {item.title}
                      </button>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* <Link
            href="/blogs"
            className="hover:text-[#00FF93] cursor-pointer transition-all duration-200"
          >
            Blogs
          </Link> */}

          {/* Industries & Use Cases */}
          <div
            onMouseEnter={() => setDropdownOpen2(true)}
            onMouseLeave={() => setDropdownOpen2(false)}
            className="relative flex items-center h-full"
          >
            <button
              aria-haspopup="true"
              aria-expanded={dropdownOpen2}
              onClick={() => setDropdownOpen2((open) => !open)}
              className="flex hover:text-[#00FF93] transition-all duration-200 items-center cursor-pointer gap-1 focus:outline-none"
            >
              Industries & Use Cases{" "}
              <ChevronDown size={16} aria-hidden="true" />
            </button>
            <AnimatePresence>
              {dropdownOpen2 && mounted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ type: "tween", duration: 0.12 }}
                  className="absolute overflow-hidden top-full mt-1 dropdown-div bg-[#0F1114] border border-white/10 rounded-lg shadow-[#00FF93]/10 shadow w-56 z-50"
                  role="menu"
                  aria-label="Industries submenu"
                >
                  {industries.map((item) => (
                    <Link key={item.id} href={`/industries/${item.id}`}>
                      <button
                        className="w-full text-left px-4 py-3 hover:text-[#00FF93] transition-all duration-200 hover:bg-[#1A1D21] cursor-pointer text-white"
                        role="menuitem"
                      >
                        {item.title}
                      </button>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button
            onClick={() => handleClick("Contact")}
            className="hover:text-[#00FF93] transition-all duration-200 cursor-pointer"
          >
            Contact
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="flex gap-6 items-center">
          <BookAuditButton className="!px-3 md:!px-6 !hidden md:!flex !py-1.5 md:!py-2.5 text-[0.8rem] md:text-sm" />

          <div className="xl:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white cursor-pointer"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X size={36} /> : <Menu size={36} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Slide In */}
      <AnimatePresence>
        {mobileMenuOpen && mounted && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="absolute rounded-3xl top-[110%] dropdown-div w-[98vw] md:max-w-[90vw] mx-auto bg-[#042222] text-[#F8F9FB] shadow-md py-4 flex flex-col items-center space-y-6 text-lg xl:hidden z-50"
            role="menu"
            aria-label="Mobile menu"
          >
            <div
              onClick={() => {
                setDropdownOpen(!dropdownOpen);
                setDropdownOpen2(false);
              }}
              className="relative flex gap-2 flex-col items-center h-full"
            >
              <div
                onClick={() => handleClick("services")}
                className="flex items-center gap-1 cursor-pointer"
              >
                Solutions <ChevronDown size={16} />
              </div>
              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="w-full bg-[#111111] py-1 text-sm overflow-hidden"
                    role="menu"
                    aria-label="Solutions submenu mobile"
                  >
                    {solutions.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => goToPage(`/solutions/${item.id}`)}
                        className="w-full px-4 py-3 hover:bg-[#1A1D21] text-white"
                        role="menuitem"
                      >
                        {item.title}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* <Link href="/blogs" onClick={() => setMobileMenuOpen(false)}>
              Blogs
            </Link> */}

            <div
              onClick={() => {
                setDropdownOpen2(!dropdownOpen2);
                setDropdownOpen(false);
              }}
              className="relative flex gap-2 flex-col items-center h-full"
            >
              <div className="flex items-center gap-1 cursor-pointer">
                Industries & Use Cases <ChevronDown size={16} />
              </div>
              <AnimatePresence>
                {dropdownOpen2 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="w-full bg-[#111111] py-1 text-sm overflow-hidden"
                    role="menu"
                    aria-label="Industries submenu mobile"
                  >
                    {industries.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => goToPage(`/industries/${item.id}`)}
                        className="w-full px-4 py-3 hover:bg-[#1A1D21] text-white"
                        role="menuitem"
                      >
                        {item.title}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              onClick={() => {
                handleClick("Contact");
                setMobileMenuOpen(false);
              }}
            >
              Contact
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
