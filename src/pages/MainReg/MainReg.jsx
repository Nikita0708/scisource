import React from "react";
import s from "./mainreg.module.css";
import { Link } from "react-router-dom";
import HeaderReg from "../../components/HeaderReg/HeaderReg";
import Footer from "../../components/Footer/Footer";
import { PROJECT_APPLY, USER_PROFILE } from "../../routes/routes";

const MainReg = () => {
    return (
        <>
            <HeaderReg />
            <section className={s.section}>
                <div className={s.container}>
                    <h1 className={s.title}>Project search</h1>
                    <div className={s.wrap}>
                        <div className={s.filter}>
                            <span className={s.span_title}>Filter</span>
                            <label className={s.label}>
                                <input type="checkbox" className={s.check} />
                                Development
                            </label>
                            <label className={s.label}>
                                <input type="checkbox" className={s.check} />
                                Software
                            </label>
                            <label className={s.label}>
                                <input type="checkbox" className={s.check} />
                                Physics
                            </label>
                            <label className={s.label}>
                                <input type="checkbox" className={s.check} />
                                Science
                            </label>
                        </div>
                        <div className={s.project}>
                            <div className={s.proj_top_wrap}>
                                <h2 className={s.proj_title}>*project Name*</h2>
                            </div>
                            <div className={s.mid_wrap}>
                                <Link to={USER_PROFILE}>
                                    <img
                                        src={require("../../img/profilephoto.jpg")}
                                        alt="profilephoto"
                                        className={s.img}
                                    />
                                </Link>
                                <div className={s.mid_right}>
                                    <div className={s.wrapper}>
                                        <span className={s.span}>
                                            Vacancies
                                        </span>
                                        <span className={s.user_data}>
                                            *Vacancies*
                                        </span>
                                    </div>
                                    <div className={s.wrapper}>
                                        <span className={s.span}>
                                            Field of activity
                                        </span>
                                        <span className={s.user_data}>
                                            *Field*
                                        </span>
                                    </div>

                                    <div className={s.wrapper}>
                                        <span className={s.span}>
                                            Description
                                        </span>
                                        <span className={s.user_data}>
                                            *Description*
                                        </span>
                                    </div>

                                    <span className={s.more}>Read more</span>
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
                            </div>
                            <Link to={PROJECT_APPLY} className={s.apply_btn}>
                                Apply
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default MainReg;
