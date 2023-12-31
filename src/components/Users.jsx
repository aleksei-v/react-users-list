import React from 'react';
import User from './User';
import { Skeleton } from './Skeleton';

const Users = ({ items, isLoading, onChangeSearchValue, searchValue, invites, onClickInvite, onClickSendInvites }) => {
    const buttonClass = invites.length > 0 ? 'send-invite-btn active' : 'send-invite-btn';
    return (
        <div>
            <div className="search">
                <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
                </svg>
                <input value={searchValue} onChange={onChangeSearchValue} type="text" placeholder="Знайти користувача..." />
            </div>
            {isLoading ? (
                <div className="skeleton-list">
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                </div>
            ) : (
                <ul className="users-list">
                        {items.filter(({first_name, last_name, email}) => {
                            const fullName = (first_name + last_name).toLowerCase();
                            return fullName.includes(searchValue.toLowerCase()) || email.toLowerCase().includes(searchValue.toLowerCase());
                        })
                                .map(item => <User
                                    onClickInvite={onClickInvite}
                                    isInvited={invites.includes(item.id)}
                                    key={item.id}
                                    {...item} />)}
                    </ul>
            )}
            
   
            <button onClick={onClickSendInvites} className={buttonClass} >Відправити запрошення</button>
   

        </div>
    );
};

export default Users