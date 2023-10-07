import React from "react";
import s from "./profilemessage.module.css";
import { Link } from "react-router-dom";
import { PROFILE_EDIT } from "../../routes/routes";

const EditProfileMessage = () => {
    return (
        <div className={s.wrapper}>
            <Link to={PROFILE_EDIT} className={s.text}>
                Complete your profile
            </Link>
            <button type="button" className={s.btn_close}>
                <svg className="btn_close">
                    <use></use>
                </svg>
            </button>
        </div>
    );
};

export default EditProfileMessage;
