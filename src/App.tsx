import React from 'react';
import UserProfileCard from "./components/UserProfileCard";
import avatar from './assets/fe-avatar.webp';

type User = {
  name: string | undefined;
  photo: string | undefined;
  description: string | undefined;
}

const App: React.FC = () => {

  const setUserInfo = ({ name = '', photo = undefined, description = '' }: User) => (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h3>Карточка пользователя</h3>
      {photo && <img src={photo} alt={name} style={{
        width: "100px",
        height: "100px",
        borderRadius: "50%",
        marginBottom: "10px"
      }} />}
      <strong>{name}</strong>
      <p style={{textAlign: "center"}}>{description}</p>
    </div>
  );

  return (
    <UserProfileCard
      name="Людмила Иванова"
      photo={avatar}
      description="Frontend разработчик с опытом более 5 лет"
      style={{ border: "1px solid #ddd", padding: "20px" }}
      render={({ name, photo, description }) => setUserInfo({ name, photo, description })}
    >
      <p>Информация о пользователе отсутствует.</p>
    </UserProfileCard>
  );
}

export default App;