import React from 'react';
import "../css/Header.css";
import NoteOutlinedIcon from '@mui/icons-material/NoteOutlined';


const Header = () => {
    return (
        <>
            <div className="header">
                    <NoteOutlinedIcon style={{ color:"white", fontSize: 50 , backgroundColor:"#B19CD8" }} />
                    <h1>Thakur Keep</h1>
            </div>
           
        </>
    )

}

export default Header;
