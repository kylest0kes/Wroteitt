import React, { forwardRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserMenu.scss';

const UserMenu = forwardRef(({ userImg, displayName, username, onSignOut }, ref) => {
    const navigate = useNavigate();

    const handleSettingsClick = () => {
        navigate('/settings');
    }

    const handleHelpClick = () => {
        navigate('/help');
    }

    return (
        <div ref={ref} className="user-menu">
            <div className="user-info">
                <div className="profile-img" >
                    <img className='user-img' alt='user-img' src={userImg} />
                </div>
                <div className='names-container'>
                    <h3 className="displayname">{displayName}</h3>
                    <h5 className='name'>user\{username}</h5>
                </div>
                <div className='btn-container'>
                    <div className="ui btn normal">View Profile</div>
                </div>
            </div>

            <div className="menu-nav">
                <li onClick={handleSettingsClick} className='menu-nav-li'><span className="menu-nav-span"></span>Settings</li>
                <li onClick={handleHelpClick} className='menu-nav-li'><span className="menu-nav-span"></span>Help</li>
                <li onClick={onSignOut} className='menu-nav-li'><span className="menu-nav-span"></span>Sign Out</li>
            </div>
        </div>

    );
});

export default UserMenu;