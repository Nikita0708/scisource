import React from "react";
import s from "./userprofile.module.css";
import { Link } from "react-router-dom";
import { PROFILE_EDIT } from "../../routes/routes";

const UserProfile = ({
    userName,
    userSkills,
    userOccupation,
    userLinkedIn,
}) => {
    return (
        <section className={s.section}>
            <img src="/" alt="profile" className={s.profile_img} />
            {/* кнопка появляется только на своем профайле */}
            <Link to={PROFILE_EDIT} className={s.link_edit}>
                Edit Profile
            </Link>
            <ul className={s.list}>
                <li className={s.item}>
                    <h2 className={s.small_title}>Name:</h2>
                    <span className={s.user_info}>{userName}</span>
                </li>
                <li className={s.item}>
                    <h2 className={s.small_title}>Skills:</h2>
                    <span className={s.user_info}>{userSkills}</span>
                </li>
                <li className={s.item}>
                    <h2 className={s.small_title}>Occupation:</h2>
                    <span className={s.user_info}>{userOccupation}</span>
                </li>
                <li className={s.item}>
                    <h2 className={s.small_title}>LinkedIn:</h2>
                    <a href="/" target="_blank" className={s.user_info}>
                        {userLinkedIn}
                    </a>
                </li>
            </ul>
        </section>
    );
};

export default UserProfile;
