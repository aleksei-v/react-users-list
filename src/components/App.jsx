import { useState, useEffect } from "react";
import Users from "./Users";
import { Success } from "./Success";
import { Notify } from "notiflix";


export const App = () => {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  const [searchValue, setSearchValue] = useState('');
  const [invites, setInvites] = useState([]);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    fetch('https://reqres.in/api/users').then(res => res.json()).then(json => {
      setUsers(json.data)
    }).catch(err => {
      console.warn(err);
      alert("Сталася помилка при отриманні юзерів, спробуй перезавантажити сторінку")
    }).finally(() => setIsLoading(false))
  
  
  }, [])
  const onChangeSearchValue = (e) => {
    setSearchValue(e.target.value)
  };

  const onClickInvite = id => {
    if (invites.includes(id)) {
      setInvites((prev) => prev.filter((_id) => _id !== id));
      Notify.failure("Видалено з запрошених")
    } else {
      setInvites(prev => [...prev, id])
      Notify.success("Додано до запрошених")
    }
    
  }

  const onClickSendInvites = () => {
    setSuccess(true)
  }
  return (
    <div className="App">
      {
        success ? (
          <Success count={invites.length}/>
        ) : (
          <Users
            items={users}
            isLoading={isLoading}
            onChangeSearchValue={onChangeSearchValue}
            searchValue={searchValue}
            invites={invites}
            onClickInvite={onClickInvite}
            onClickSendInvites={onClickSendInvites}
          />
        )
   
      }
    </div>
  );
};
