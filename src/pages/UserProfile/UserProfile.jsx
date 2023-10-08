import React from "react";
import s from "./userprofile.module.css";
import svg from "../../img/sprite.svg";
import HeaderReg from "../../components/HeaderReg/HeaderReg";
import Footer from "../../components/Footer/Footer";

const UserProfile = () => {
    return (
        <>
            <HeaderReg />
            <section className={s.section}>
                <div className={s.container}>
                    <ul className={s.left_list}>
                        <li className={s.item}>
                            <a href="#basic" className={s.item_link}>
                                Basic information
                            </a>
                        </li>
                        <li className={s.item}>
                            <a href="#about" className={s.item_link}>
                                About me
                            </a>
                        </li>
                        <li className={s.item}>
                            <a href="#worktime" className={s.item_link}>
                                Working time
                            </a>
                        </li>
                        <li className={s.item}>
                            <a href="#workexper" className={s.item_link}>
                                Work experience
                            </a>
                        </li>
                        <li className={s.item}>
                            <a href="#files" className={s.item_link}>
                                Files
                            </a>
                        </li>
                        <li className={s.item}>
                            <a href="#links" className={s.item_link}>
                                Links
                            </a>
                        </li>
                    </ul>
                    <div className={s.right_side}>
                        <div className={s.section_wrapper} id="basic">
                            <h1 className={s.basic_title}>Basic information</h1>
                            <div className={s.basic_wrapper}>
                                <img
                                    src={require("../../img/profilephoto.jpg")}
                                    alt="profilephoto"
                                    className={s.basic_img}
                                />
                                <div className={s.basic_right}>
                                    <div className={s.name_wrap}>
                                        <div className={s.wrapper}>
                                            <span className={s.span}>
                                                First name
                                            </span>
                                            <span className={s.user_data}>
                                                *Name*
                                            </span>
                                        </div>
                                        <div className={s.wrapper}>
                                            <span className={s.span}>
                                                Last name
                                            </span>
                                            <span className={s.user_data}>
                                                *Surname*
                                            </span>
                                        </div>
                                    </div>
                                    <div className={s.wrapper}>
                                        <span className={s.span}>
                                            Occupation
                                        </span>
                                        <span className={s.user_data}>
                                            *Art director*
                                        </span>
                                    </div>
                                    <div className={s.wrapper}>
                                        <span className={s.span}>Fields</span>
                                        <span className={s.user_data}></span>
                                    </div>
                                    <div className={s.wrapper}>
                                        <span className={s.span}>
                                            Languages
                                        </span>
                                        <span className={s.user_data}>
                                            *Languages*
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={s.section_wrapper} id="about">
                            <h1 className={s.about_title}>About me</h1>
                            <div className={s.wrapper}>
                                <span className={s.span}>Section title</span>
                                <span className={s.user_data}>*About me*</span>
                            </div>
                            <div className={s.wrapper}>
                                <span className={s.span}>Skills</span>
                                <span className={s.user_data}>*Skills*</span>
                            </div>
                        </div>
                        <div className={s.section_wrapper} id="worktime">
                            <h1 className={s.time_title}>Working time</h1>
                            <div className={s.wrapper}>
                                <span className={s.span}>Days</span>
                                <span className={s.user_data}>*Days*</span>
                            </div>
                            <div className={s.wrapper}>
                                <span className={s.span}>Time zone</span>
                                <span className={s.user_data}></span>
                            </div>
                            <div className={s.wrapper}>
                                <span className={s.span}>Working hours</span>
                                <span className={s.user_data}></span>
                            </div>
                        </div>
                        <div className={s.section_wrapper} id="workexper">
                            <h1 className={s.exp_title}>Work experience</h1>
                            <div className={s.exp_wrap}>
                                <div className={s.wrapper}>
                                    <span className={s.span}>Position</span>
                                    <span className={s.user_data}></span>
                                </div>
                                <div className={s.wrapper}>
                                    <span className={s.span}>Company</span>
                                    <span className={s.user_data}></span>
                                </div>
                                <div className={s.wrapper}>
                                    <span className={s.span}>Years</span>
                                    <span className={s.user_data}></span>
                                </div>
                            </div>
                        </div>
                        <div className={s.section_wrapper} id="files">
                            <h1 className={s.files_title}>files</h1>
                            <div className={s.files_wrap}>
                                <svg
                                    className={s.files_svg}
                                    width={55}
                                    height={65}
                                >
                                    <use href={svg + "#icon-files"}></use>
                                </svg>
                                <span className={s.span}>
                                    *Name of the file*
                                </span>
                            </div>
                        </div>
                        <div className={s.section_wrapper} id="links">
                            <h1 className={s.links_title}>links</h1>
                            <div className={s.links_wrap}>
                                <div className={s.wrapper}>
                                    <span className={s.span}>Link title</span>
                                    <span className={s.user_data}></span>
                                </div>
                                <div className={s.wrapper}>
                                    <span className={s.span}>URL</span>
                                    <span className={s.user_data}></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default UserProfile;
