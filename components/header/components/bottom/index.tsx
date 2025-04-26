"use client";

import Link from "next/link";
import { JSX } from "react";
import { useState } from "react";
import { HEADER_BOTTOM_DATA } from "@/constants/header";
import Hamburger from "@/components/hamburger";
import SignInBtn from "../sign-in-btn";
import Icon from "@/components/icon";
import Sidebar from "../sidebar";
import Modal from "@/components/modal";

import styles from "./styles.module.scss";

const Bottom = (): JSX.Element => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isAuthModalOpen, setAuthModalOpen] = useState<boolean>(false);
  const [isSidebarVisible, setSidebarVisible] = useState<boolean>(false);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSignInClick = (): void => {
    setAuthModalOpen(true);
  };

  const closeAuthModal = (): void => {
    setAuthModalOpen(false);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.action_block}>
          <Link href="/">
            <Icon
              width={164}
              height={36}
              name="logo"
              className={styles.header_logo}
            />
          </Link>
          <Hamburger
            label="Տեսականի"
            className={styles.assortment_btn}
            onClick={() => setSidebarVisible((prevState) => !prevState)}
          />
          <div className={styles.search}>
            <Icon
              width={20}
              height={20}
              name="search"
              className={styles.search_icon}
            />
            <input
              type="text"
              value={searchTerm}
              placeholder="Փնտրել"
              className={styles.search_inp}
              onChange={handleSearchChange}
            />
          </div>

          <div className={styles.icons_block}>
            {HEADER_BOTTOM_DATA.map((icon, i) => {
              const className = icon.className
                ? styles[icon.className]
                : undefined;

              return (
                <Icon
                  key={i}
                  width={20}
                  height={20}
                  name={icon.icon_src}
                  className={className}
                />
              );
            })}
            <SignInBtn label="Մուտք գործել" onClick={handleSignInClick} />
          </div>
        </div>
      </div>
      {isSidebarVisible && <Sidebar />}

      <Modal
        hasCloseBtn={false}
        isOpen={isAuthModalOpen}
        onClose={closeAuthModal}
        className={styles.login_modal}
      >
        <div className={styles.inner_modal}>
          <p>Մուտք</p>
          <form>
            <Icon
              width={40}
              height={40}
              name="close"
              type="button"
              aria-label="Close"
              onClick={closeAuthModal}
              className={styles.modal_close_btn}
            />
            <input type="email" placeholder="Էլ. փոստի հասցե" />
            <input type="password" placeholder="Գաղտնաբառ" />
            <Link href="/">Մոռացել եմ գաղտնաբառը</Link>
            <div className={styles.btn_block}>
              <button aria-label="Մուտք">Մուտք գործել</button>
              <Link href="/registration">Գրանցվի՛ր</Link>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default Bottom;
