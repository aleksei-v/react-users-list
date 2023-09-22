import { BiSolidUserCheck } from "react-icons/bi";

export const Success = ({ count }) => {
  return (
    <div className="success-block">
      <BiSolidUserCheck style={{ fontSize: '7em' }}  />
      <h3>Успішно!</h3>
          <p>
              {count === 1 ? `Одному користувачу ` : `Всім ${count} користувачам`}
              відправлено запрошення.</p>
      <button onClick={() => window.location.reload()} className="send-back-btn">Назад</button>
    </div>
  );
};