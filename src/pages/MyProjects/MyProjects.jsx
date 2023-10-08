import React from "react";
import s from "./myprojects.module.css";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import HeaderReg from "../../components/HeaderReg/HeaderReg";
import { PROJECT_APPLY, USER_PROFILE } from "../../routes/routes";

const MyProjects = () => {
    return (
        <>
            <HeaderReg />
            <section className={s.myprojects}>
                <div className={s.container}>
                    <h1 className={s.my_title}>My projects</h1>
                    <div className={s.first_wrapper}>
                        <h2 className={s.proj_title}>*project Name*</h2>
                        <div className={s.proj_wrap}>
                            <img
                                src={require("../../img/profilephoto.jpg")}
                                alt="profilephoto"
                                className={s.img}
                            />
                            <div className={s.left_right}>
                                <div className={s.wrapper}>
                                    <span className={s.span}>
                                        Field of activity
                                    </span>
                                    <span className={s.user_data}>*Field*</span>
                                </div>
                                <div className={s.wrapper}>
                                    <span className={s.span}>Technologies</span>
                                    <span className={s.user_data}>
                                        *Technologies*
                                    </span>
                                </div>
                                <div className={s.wrapper}>
                                    <span className={s.span}>Vacancies</span>
                                    <span className={s.user_data}>
                                        *Vacancies*
                                    </span>
                                </div>
                                <div className={s.wrapper}>
                                    <span className={s.span}>Description</span>
                                    <span className={s.user_data}>
                                        *Description*
                                    </span>
                                </div>
                                <span className={s.edit}>Open editing</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={s.recommend}>
                <div className={s.container}>
                    <h1 className={s.rec_title}>Recommended projects</h1>
                    <div className={s.first_wrapper}>
                        <h2 className={s.proj_title}>*project Name*</h2>
                        <div className={s.proj_wrap}>
                            <Link to={USER_PROFILE}>
                                <img
                                    src={require("../../img/profilephoto.jpg")}
                                    alt="profilephoto"
                                    className={s.img}
                                />
                            </Link>
                            <div className={s.left_right}>
                                <div className={s.wrapper}>
                                    <span className={s.span}>
                                        Field of activity
                                    </span>
                                    <span className={s.user_data}>*Field*</span>
                                </div>
                                <div className={s.wrapper}>
                                    <span className={s.span}>Technologies</span>
                                    <span className={s.user_data}>
                                        *Technologies*
                                    </span>
                                </div>
                                <div className={s.wrapper}>
                                    <span className={s.span}>Vacancies</span>
                                    <span className={s.user_data}>
                                        *Vacancies*
                                    </span>
                                </div>
                                <div className={s.wrapper}>
                                    <span className={s.span}>Description</span>
                                    <span className={s.user_data}>
                                        *Description*
                                    </span>
                                </div>
                                <Link
                                    to={PROJECT_APPLY}
                                    className={s.apply_btn}
                                >
                                    Apply
                                </Link>
                                <Link
                                    to={USER_PROFILE}
                                    className={s.view_profile}
                                >
                                    View owner profile
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default MyProjects;
