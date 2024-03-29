import React from 'react';

interface TeacherProfileProps {
  name: string | undefined;
  description: string | undefined;
  subject: string | undefined;
  experience: string | undefined;
}

const TeacherProfile: React.FC<TeacherProfileProps> = ({ name='', description='', subject='', experience='' }) => {
  return (
    <div className="teacher-profile">
      <p>Имя: {name && name}</p>
      <p>О себе: {description && description}</p>
      <p>Предмет: {subject && subject}</p>
      <p>Опыт работы: {experience && experience}</p>
    </div>
  );
}

export default TeacherProfile;