import { ILFlag } from "@components/icons/ILFlag";
import { SAFlag } from "@components/icons/SAFlag";
import { CNFlag } from "@components/icons/CNFlag";
import { USFlag } from "@components/icons/USFlag";
import { DEFlag } from "@components/icons/DEFlag";
import { ESFlag } from "@components/icons/ESFlag";
export const siteSettings = {
  name: "LeanCommerce",
  description:
    "Fastest E-commerce template built with React, NextJS, TypeScript, React-Query and Tailwind CSS.",
  author: {
    name: "RedQ, Inc.",
    websiteUrl: "https://redq.io",
    address: "",
  },
  logo: {
    url: "/assets/images/logo.svg",
    alt: "ChawkBazar",
    href: "/",
    width: 95,
    height: 30,
  },
  defaultLanguage: "en",
  currencyCode: "USD",
  site_header: {
    menu: [
      {
        id: 1,
        path: "/",
        label: "menu-home",
      },
      {
        id: 2,
        path: "/search",
        label: "menu-search",
      },

      {
        id: 3,
        path: "/",
        label: "menu-demos",
        subMenu: [
          {
            id: 1,
            path: "/",
            label: "menu-modern",
          },
          {
            id: 2,
            path: "/standard",
            label: "menu-standard",
          },
          {
            id: 3,
            path: "/minimal",
            label: "menu-minimal",
          },
          {
            id: 4,
            path: "/vintage",
            label: "menu-vintage",
          },
          {
            id: 5,
            path: "/classic",
            label: "menu-classic",
          },
          {
            id: 6,
            path: "/trendy",
            label: "menu-trendy",
          },
          {
            id: 7,
            path: "/elegant",
            label: "menu-elegant",
          },
          {
            id: 8,
            path: "/refined",
            label: "menu-refined",
          },
        ],
      },
    ],
    mobileMenu: [
      {
        id: 1,
        path: "/",
        label: "menu-home",
      },
      {
        id: 2,
        path: "/search",
        label: "menu-search",
      },
      {
        id: 3,
        path: "/",
        label: "menu-demos",
        subMenu: [
          {
            id: 1,
            path: "/",
            label: "menu-modern",
          },
          {
            id: 2,
            path: "/standard",
            label: "menu-standard",
          },
          {
            id: 3,
            path: "/minimal",
            label: "menu-minimal",
          },
          {
            id: 4,
            path: "/vintage",
            label: "menu-vintage",
          },
          {
            id: 5,
            path: "/classic",
            label: "menu-classic",
          },
          {
            id: 6,
            path: "/trendy",
            label: "menu-trendy",
          },
          {
            id: 7,
            path: "/elegant",
            label: "menu-elegant",
          },
          {
            id: 8,
            path: "/refined",
            label: "menu-refined",
          },
        ],
      },
    ],
    languageMenu: [
      {
        id: "ar",
        name: "عربى - AR",
        value: "ar",
        icon: <SAFlag width="20px" height="15px" />,
      },
      {
        id: "zh",
        name: "中国人 - ZH",
        value: "zh",
        icon: <CNFlag width="20px" height="15px" />,
      },
      {
        id: "en",
        name: "English - EN",
        value: "en",
        icon: <USFlag width="20px" height="15px" />,
      },
      {
        id: "de",
        name: "Deutsch - DE",
        value: "de",
        icon: <DEFlag width="20px" height="15px" />,
      },
      {
        id: "he",
        name: "rעברית - HE",
        value: "he",
        icon: <ILFlag width="20px" height="15px" />,
      },
      {
        id: "es",
        name: "Español - ES",
        value: "es",
        icon: <ESFlag width="20px" height="15px" />,
      },
    ],
  },
};
