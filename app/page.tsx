"use client";
import { Button, TextArea, TextInput, Tile } from "@carbon/react";
import { useEffect, useState } from "react";
import Link from "next/link";
import Toggle from "@/components/toggle";
import { useTranslations } from "next-intl";
import router from "next/router";

export default function Home() {
  const [locale, setLocale] = useState<string>("");

  useEffect(() => {
    const cookieLocale = document.cookie
      .split("; ")
      .find((row) => row.startsWith("MYNEXTAPP_LOCALE="))
      ?.split("=")[1];

    if (cookieLocale) {
      setLocale(cookieLocale);
    } else {
      const browserLocale = navigator.language.slice(0, 2);
      setLocale(browserLocale);
      document.cookie = `MYNEXTAPP_LOCALE=${browserLocale};`;
    }
  }, [router]);

  const changeLocale = (newLocale: string) => {
    setLocale(newLocale);
    document.cookie = `MYNEXTAPP_LOCALE=${newLocale};`;
    window.location.reload();
  };

  const t = useTranslations("HomePage");

  return (
    <main>
      <h1 className="heading">Citizen Dashboard</h1>
      <div className="flex">
        <Toggle />
        <div className="btn1-container">
          <button onClick={() => changeLocale("en")} className="btn1">
            EN
          </button>
          <button onClick={() => changeLocale("np")} className="btn1">
            NP
          </button>
        </div>
      </div>

      <div className="container">
        <p>{t("welcome")}</p>
        <p>{t("description")}</p>
        <div>
          <Button className="btn" kind="primary">
            {t("btn")}
          </Button>
          <Button className="btn" kind="secondary">
          {t("btn1")}
          </Button>
        </div>
      </div>

      <div className="box-container grid grid-cols-4 gap-4">
        <Tile className="box text-center font-semibold">
          500+ Gunaso submitted
        </Tile>
        <Tile className="box text-center font-semibold">300+ Resolved</Tile>
        <Tile className="box text-center font-semibold">100 Pending</Tile>
        <Tile className="box text-center font-semibold">20 Escalated</Tile>
      </div>

      <footer className="footer">
        <Link className="link" href="/">
          Home
        </Link>
        <Link className="link" href="/my-grievances">
          My Grievances
        </Link>
        <Link className="link" href="/submit-grievances">
          Submit Grievances
        </Link>
        <Link className="link" href="/notifications">
          Notification
        </Link>
      </footer>
    </main>
  );
}
