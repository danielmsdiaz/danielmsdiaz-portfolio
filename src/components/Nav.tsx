"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Alert from "@/components/Alert";

//translations
import { useTranslation } from "react-i18next"

type NavProps = {
  containerStyles: string;
  linkStyles: string;
  underlineStyles?: string;
  onClick?: () => void;
};

const Nav = ({ containerStyles, linkStyles, underlineStyles, onClick }: NavProps) => {
  const path = usePathname();
  const [showAlert, setShowAlert] = useState(false);
  const [t, i18n] = useTranslation("global");

  const links = [
    { path: "/", name: t("nav.home") },
    { path: "/projects", name: t("nav.projects") },
    { path: "/contact", name: t("nav.contact") },
  ];

  const handleLinkClick = (linkPath: string, event: React.MouseEvent) => {
    if (linkPath === "/projects") {
      event.preventDefault();
      setShowAlert(true);
    }
  };

  return (
    <>
      <nav className={`${containerStyles}`}>
        {links.map((link, index) => (
          <Link
            href={link.path}
            key={index}
            className={`capitalize ${linkStyles}`}
            onClick={(event) => handleLinkClick(link.path, event)}
          >
            {link.path === path && (
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ type: "tween" }}
                layoutId="underline"
                className={`${underlineStyles}`}
              />
            )}
            {link.name}
          </Link>
        ))}
      </nav>

      {showAlert && (
        <Alert
          onClose={() => setShowAlert(false)}
        />
      )}
    </>
  );
};

export default Nav;
