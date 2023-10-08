import React from "react";
import s from "./respond.module.css";
import { Link } from "react-router-dom";
import post from "../../img/post.svg";
import { CHAT, USER_PROFILE } from "../../routes/routes";
import HeaderReg from "../../components/HeaderReg/HeaderReg";
import Footer from "../../components/Footer/Footer";

const Respond = () => {
    return (
        <>
            <HeaderReg />
            <section className={s.section}>
                <div className={s.container}>
                    <h1 className={s.title}>feedback on vacancies</h1>
                    <div className={s.project}>
                        <div className={s.proj_top_wrap}>
                            <h2 className={s.proj_title}>*project Name*</h2>
                            <Link className={s.add_link}>
                                <img src={post} alt="" />
                            </Link>
                        </div>
                        <div className={s.mid_wrap}>
                            <img
                                src={require("../../img/profilephoto.jpg")}
                                alt="profilephoto"
                                className={s.img}
                            />
                            <div className={s.left_right}>
                                <div className={s.wrapper}>
                                    <span className={s.span}>Vacancies</span>
                                    <span className={s.user_data}>
                                        *Vacancies*
                                    </span>
                                </div>
                                <div className={s.wrapper}>
                                    <span className={s.span}>
                                        Field of activity
                                    </span>
                                    <span className={s.user_data}>*Field*</span>
                                </div>
                            </div>
                        </div>
                        <div className={s.tech_wrap}>
                            <span className={s.span}>Technologies</span>
                            <ul className={s.tech_list}>
                                <li className={s.tech_item}>JS</li>
                                <li className={s.tech_item}>C++</li>
                                <li className={s.tech_item}>C#</li>
                                <li className={s.tech_item}>react</li>
                            </ul>
                        </div>
                        <div className={s.bottom_wrap}>
                            <span className={s.span}>Description</span>
                            <span className={s.user_data}>*Description*</span>
                        </div>
                    </div>
                    <span className={s.respond_span}>
                        You have <span className={s.num}>*3*</span> responds
                    </span>
                    <div className={s.vacancy}>
                        <div className={s.vac_main}>
                            <div className={s.vac_top}>
                                <h2 className={s.vacancy_title}>
                                    *Name of vacancy*
                                </h2>
                                <h3 className={s.name}>*Name* *Surname*</h3>
                            </div>
                            <div className={s.vac_mid}>
                                <div className={s.vac_mid_left}>
                                    <div className={s.wrapper}>
                                        <span className={s.span}>Skills</span>
                                        <span className={s.user_data}>
                                            *Skills*
                                        </span>
                                    </div>
                                    <div className={s.wrapper}>
                                        <span className={s.span}>
                                            Competence
                                        </span>
                                        <span className={s.user_data}>
                                            *Ex: Junior/Middle/Senior*
                                        </span>
                                    </div>
                                </div>
                                <div className={s.vac_mid_right}>
                                    <span className={s.span}>Cover letter</span>
                                    <p className={s.user_data}>
                                        *Cover letter**Cover letter**Cover
                                        letter**Cover letter**Cover
                                        letter**Cover letter**Cover
                                        letter**Cover letter**Cover
                                        letter**Cover letter**Cover letter**...
                                    </p>
                                </div>
                            </div>
                            <span className={s.more}>Read more</span>
                        </div>
                        <div className={s.vac_right}>
                            <Link to={USER_PROFILE}>
                                <img
                                    src={require("../../img/profilephoto.jpg")}
                                    alt="profilephoto"
                                    className={s.img}
                                />
                            </Link>
                            <Link to={USER_PROFILE} className={s.profile}>
                                View profile
                            </Link>
                            <Link to={CHAT} className={s.chat}>
                                Text
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Respond;
