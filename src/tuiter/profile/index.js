import React from "react";
import ProfileOn from "./profile-page";
import {useSelector} from "react-redux";


const ProfileComponent = () => {

    const profArray = useSelector(state => state.profile)
    return(
        <>
            {
                profArray.map(prof =>
                    <ProfileOn
                        key={prof._id} prof={prof}/> )
            }


        </>
    );
};
export default ProfileComponent;