import React, { useEffect } from "react";
import s from "./headerreg.module.css";
import svg from "../../img/sprite.svg";
import { Link } from "react-router-dom";
import {
    CREATE_PROJECT,
    MAIN_REG,
    MAIN_UNREG,
    MY_PROJECTS,
    PROFILE_EDIT,
    PROJECT_RESPONSES,
} from "../../routes/routes";
import search from "../../img/icon-search.svg";
import post from "../../img/post.svg";
import profile from "../../img/profile.svg";
import { useLocation } from "react-router-dom";
const HeaderReg = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <header className={s.header}>
            <div className={s.container}>
                <Link to={MAIN_UNREG}>
                    <svg className={s.logo_svg} width={162} height={38}>
                        <use href={svg + "#icon-logo"}></use>
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
                    <Link to={MAIN_REG}>
                        <button type="button" className={s.btn_submit}>
                            <img src={search} alt="" />
                        </button>
                    </Link>
                </form>
                <Link to={CREATE_PROJECT} className={s.add_link}>
                    <img src={post} alt="" />
                </Link>
                <Link className={s.profile}>
                    <img src={profile} alt="" />
                    <div className={s.profile_menu}>
                        <Link to={MAIN_UNREG} className={s.profile_item}>
                            Main Page
                        </Link>
                        <Link to={MAIN_REG} className={s.profile_item}>
                            Search for projects
                        </Link>
                        <Link to={PROFILE_EDIT} className={s.profile_item}>
                            My Profile
                        </Link>
                        <Link to={MY_PROJECTS} className={s.profile_item}>
                            My Projects
                        </Link>
                        <Link to={PROJECT_RESPONSES} className={s.profile_item}>
                            My Responses
                        </Link>
                        <Link to={MAIN_UNREG} className={s.profile_item}>
                            Logout
                        </Link>
                    </div>
                </Link>
            </div>
        </header>
    );
};

export default HeaderReg;
