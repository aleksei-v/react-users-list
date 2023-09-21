import React from 'react';
import User from './User';
import { Skeleton } from './Skeleton';

const Users = ({ items, isLoading, onChangeSearchValue, searchValue }) => {
    console.log(searchValue)
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
                    <ul>
                        {items.filter(({first_name, last_name, email}) => {
                            const fullName = first_name + last_name;
                            return fullName.includes(searchValue) || email.includes(searchValue);
                        }).map(item => <User key={item.id} {...item} />)}
                    </ul>
                </ul>
            )}
            <button className="send-invite-btn">Отправить приглашение</button>


        </div>
    );
};

export default Users