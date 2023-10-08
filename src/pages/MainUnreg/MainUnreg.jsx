import React from "react";
import s from "./mainunreg.module.css";
import { Link } from "react-router-dom";
import svg from "../../img/sprite.svg";
import { MAIN_REG, MAIN_UNREG } from "../../routes/routes";
import Footer from "../../components/Footer/Footer";

const MainUnreg = () => {
    return (
        <>
            <section className={s.header_hero}>
                <div className={s.container}>
                    <div className={s.header}>
                        <Link to={MAIN_UNREG} className={s.logo_link}>
                            <svg className={s.logo_svg} width={162} height={38}>
                                <use href={svg + "#icon-logo"}></use>
                            </svg>
                        </Link>
                        <Link
                            to={MAIN_REG}
                            type="button"
                            className={s.login_link}
                        >
                            Log in
                        </Link>
                    </div>
                    <h1 className={s.hero_title}>
                        Market-place for your projects
                    </h1>
                    <span className={s.hero_span}>
                        Share - connect - create!
                    </span>
                    <div className={s.link_wrap}>
                        <a href="#about" className={s.link_about}>
                            About the project
                        </a>
                        <a href="#contact" className={s.link_contact}>
                            Contact us
                        </a>
                    </div>
                    <svg className={s.hero_svg} width={1024} height={576}>
                        <use href={svg + "#icon-map"}></use>
                    </svg>
                </div>
            </section>
            <section className={s.sbout} id="about">
                <div className={s.container}>
                    <ul className={s.about_list}>
                        <li className={s.about_item}>
                            <h2 className={s.about_title}>share</h2>
                            <p className={s.about_text}>
                                Share software, data, papers and knowledge.
                            </p>
                        </li>
                        <li className={s.about_item}>
                            <h2 className={s.about_title}>connect</h2>
                            <p className={s.about_text}>
                                For project creators - search for collaborators
                                based on the skills and level of expertise you
                                need. <br /> <br /> For individuals - search for
                                projects to work on based on your interests.
                            </p>
                        </li>
                        <li className={s.about_item}>
                            <h2 className={s.about_title}>create</h2>
                            <p className={s.about_text}>
                                Create projects and take part in projects you
                                are interested in!
                            </p>
                        </li>
                    </ul>
                </div>
            </section>
            <section className={s.contact} id="contact">
                <div className={s.container}>
                    <form className={s.form}>
                        <h2 className={s.contact_title}>
                            Do you have any questions?
                        </h2>
                        <input
                            type="email"
                            name="contactUserEmail"
                            className={s.email}
                            placeholder="Enter your Email"
                        />
                        <textarea
                            name="userQuestion"
                            id="userQuestion"
                            className={s.textarea}
                            placeholder="Write down your question"
                        ></textarea>
                        <button type="submit" className={s.btn_submit}>
                            Send
                        </button>
                    </form>
                    <img src={require("../../img/sphere.png")} alt="sphere" />
                </div>
            </section>
            <Footer />
        </>
    );
};

export default MainUnreg;
