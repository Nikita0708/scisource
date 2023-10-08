import React from "react";
import s from "./profileedit.module.css";
import svg from "../../img/sprite.svg";
import HeaderReg from "../../components/HeaderReg/HeaderReg";
import Footer from "../../components/Footer/Footer";
// Делаем чтобы текущее имя пользователя было в плейсхолдере

const ProfileEdit = ({
    userName,
    userSkills,
    userOccupation,
    userLinkedIn,
}) => {
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
                                <div className={s.basic_left}>
                                    <img
                                        src={require("../../img/profilephoto.jpg")}
                                        alt="profilephoto"
                                        className={s.basic_img}
                                    />
                                    <span className={s.span_wrap}>
                                        <svg
                                            className={s.img_svg}
                                            width={22}
                                            height={19.8}
                                        >
                                            <use
                                                href={svg + "#icon-choosephoto"}
                                            ></use>
                                        </svg>
                                        <span className={s.basic_span}>
                                            Upload
                                        </span>
                                    </span>
                                </div>
                                <div className={s.basic_right}>
                                    <label className={s.label}>
                                        First name
                                        <input
                                            type="text"
                                            className={s.input}
                                            placeholder="Enter your first name"
                                        />
                                    </label>
                                    <label className={s.label}>
                                        Last name
                                        <input
                                            type="text"
                                            className={s.input}
                                            placeholder="Enter your last name"
                                        />
                                    </label>
                                    <label className={s.label}>
                                        Occupation
                                        <input
                                            type="text"
                                            className={s.input}
                                            placeholder="Ex: Senior designer, Art director, Student"
                                        />
                                    </label>
                                    <label className={s.label}>
                                        Fields
                                        <input
                                            type="text"
                                            className={s.input}
                                            placeholder="Enter fields you are interested in"
                                        />
                                    </label>
                                    <label className={s.label}>
                                        Languages
                                        <input
                                            type="text"
                                            className={s.input}
                                            placeholder="Enter languages that you speak"
                                        />
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className={s.section_wrapper} id="about">
                            <h1 className={s.about_title}>About me</h1>
                            <label className={s.label}>
                                Section title
                                <input
                                    type="text"
                                    className={s.input}
                                    placeholder="Ex: About me"
                                />
                            </label>
                            <label className={s.label}>
                                Skills
                                <textarea
                                    type="text"
                                    className={s.textarea}
                                    placeholder="Enter your skills"
                                />
                            </label>
                        </div>
                        <div className={s.section_wrapper} id="worktime">
                            <h1 className={s.time_title}>Working time</h1>
                            <label className={s.label}>
                                Days
                                <input
                                    type="text"
                                    className={s.input}
                                    placeholder="Enter your working days"
                                />
                            </label>
                            <label className={s.label}>
                                Time zone
                                <input
                                    type="text"
                                    className={s.input}
                                    placeholder="Enter your time zone"
                                />
                            </label>
                            <label className={s.label}>
                                Working hours
                                <input
                                    type="text"
                                    className={s.input}
                                    placeholder="Enter your working hours in format from to"
                                />
                            </label>
                        </div>
                        <div className={s.section_wrapper} id="workexper">
                            <h1 className={s.exp_title}>Work experience</h1>
                            <span className={s.exp_wrap}>
                                <svg
                                    className={s.exp_svg}
                                    width={20}
                                    height={20}
                                >
                                    <use href={svg + "#icon-pen"}></use>
                                </svg>
                                Add work experience
                            </span>
                        </div>
                        <div className={s.section_wrapper} id="files">
                            <h1 className={s.files_title}>files</h1>
                            <div className={s.files_wrap}>
                                <span className={s.files_span}>
                                    <svg
                                        className={s.files_svg}
                                        width={20}
                                        height={20}
                                    >
                                        <use href={svg + "#icon-files"}></use>
                                    </svg>
                                    Attach files
                                </span>
                                <button type="button" className={s.files_add}>
                                    Add
                                </button>
                            </div>
                        </div>
                        <div className={s.section_wrapper} id="links">
                            <h1 className={s.links_title}>links</h1>
                            <div className={s.links_wrap}>
                                <label className={s.label_links}>
                                    Link title
                                    <input
                                        type="text"
                                        className={s.input_links}
                                        placeholder="Enter link title"
                                    />
                                </label>
                                <label className={s.label_links}>
                                    URL
                                    <input
                                        type="text"
                                        className={s.input_links}
                                        placeholder="Enter URL"
                                    />
                                </label>
                                <button type="button" className={s.links_btn}>
                                    Add
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default ProfileEdit;
