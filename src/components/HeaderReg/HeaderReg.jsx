import React from "react";
import s from "./headerreg.module.css";
import { Link } from "react-router-dom";
import { MAIN_REG } from "../../routes/routes";

const HeaderReg = () => {
  return (
    <header className={s.header}>
      <Link to={MAIN_REG}>
        <svg className={s.logo}>
          <use></use>
        </svg>
      </Link>
      <form className={s.form}>
        <input
          type="text"
          name="search"
          className={s.input}
          id="search"
          placeholder="Search Projects"
        />
        <button type="submit" className={s.btn_submit}>
          <svg className={s.btn_svg}>
            <use></use>
          </svg>
        </button>
      </form>
      <Link className={s.add_link}>+ Add project</Link>
      <Link className={s.profile}>
        <img src="/" alt="profile" className={s.profile_img} />
      </Link>
      <div className={s.profile_menu}>
        <Link className={s.profile_item}>Profile</Link>
        <Link className={s.profile_item}>Projects</Link>
        <Link className={s.profile_item}>Chat</Link>
        <Link className={s.profile_item}>Logout</Link>
      </div>
    </header>
  );
};

export default HeaderReg;
