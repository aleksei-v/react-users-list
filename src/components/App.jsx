import { useState, useEffect } from "react";
import Users from "./Users";



export const App = () => {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  const [searchValue, setSearchValue] = useState('')

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
  }
  return (
    <div className="App">
      <Users
        items={users}
        isLoading={isLoading}
        onChangeSearchValue={onChangeSearchValue}
        searchValue={searchValue}
      />
      

    </div>
  );
};
