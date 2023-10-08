import React from "react";
import s from "./projectresponse.module.css";
import post from "../../img/post.svg";
import { Link } from "react-router-dom";
import HeaderReg from "../../components/HeaderReg/HeaderReg";
import Footer from "../../components/Footer/Footer";
import { PROJECT_RESPONSE } from "../../routes/routes";

const ProjectResponses = () => {
    return (
        <>
            <HeaderReg />
            <section className={s.section}>
                <div className={s.container}>
                    <h1 className={s.title}>feedback on vacancies</h1>
                    <Link to={PROJECT_RESPONSE} className={s.project}>
                        <div className={s.proj_top_wrap}>
                            <h2 className={s.proj_title}>*project Name*</h2>
                            <Link className={s.add_link}>
                                <img src={post} alt="" />
                            </Link>
                            <span className={s.top_span}>
                                *number of responds* responds
                            </span>
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
                        <div className={s.wrapper}>
                            <span className={s.span}>Description</span>
                            <span className={s.user_data}>*Description*</span>
                        </div>
                    </Link>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default ProjectResponses;
