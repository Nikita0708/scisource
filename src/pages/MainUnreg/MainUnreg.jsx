import React from "react";
import s from "./mainunreg.module.css";
import { Link } from "react-router-dom";
import svg from "../../img/sprite.svg";

const MainUnreg = () => {
    return (
        <>
            <section className={s.header_hero}>
                <div className={s.container}>
                    <div className={s.header}>
                        <Link className={s.logo_link}>
                            <svg className={s.logo_svg} width={162} height={38}>
                                <use href={svg + "#icon-logo"}></use>
                            </svg>
                        </Link>
                        <Link className={s.login_link}>Log in</Link>
                    </div>
                    <h1 className={s.hero_title}>
                        Market-place for your projects
                    </h1>
                    <span className={s.hero_span}>
                        Share - connect - create!
                    </span>
                    <div className={s.link_wrap}>
                        <Link className={s.link_about}>About the project</Link>
                        <Link className={s.link_contact}>Contact us</Link>
                    </div>
                    <svg className={s.hero_svg} width={1024} height={576}>
                        <use href={svg + "#icon-map"}></use>
                    </svg>
                </div>
            </section>
            <section className={s.sbout}>
                <div className={s.container}></div>
            </section>
            <section className={s.contact}>
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
                        <svg className={s.contact_svg} width={448} height={448}>
                            <use href={svg + "#icon-sphere"}></use>
                        </svg>
                        <img src="" alt="" className={s.contact_img} />
                    </form>
                </div>
            </section>
            <footer className={s.footer}>
                <div className={s.container}>
                    <span className={s.footer_text}>
                        © 2023 NASA Space Project Marketplace
                    </span>
                </div>
            </footer>
        </>
    );
};

export default MainUnreg;
