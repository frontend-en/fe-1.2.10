import React, { ReactNode, HTMLAttributes } from 'react';
import './UserProfileCard.css';
import TeacherProfile from "../teacherProfile/TeacherProfile";

export enum ProfileType {
  Teacher = 'teacher',
  Student = 'student',
}

interface UserProfileProps {
  name?: string;
  description?: string;
  profileType?: ProfileType;
  teacherProps?: { subject: string; experience: string };
  render?: (props: { name?: string; photo?: string; description?: string }) => ReactNode;
}

const UserProfileCard: React.FC<UserProfileProps & HTMLAttributes<HTMLDivElement>> = ({
  name,
  description,
  profileType,
  teacherProps,
  render,
  children,
  ...props
}) => {

  const renderContent = () => {
    if (render) {
      return render({ name, description });
    } else {
      if (profileType === ProfileType.Teacher) {
        return <TeacherProfile name={name} description={description} subject={teacherProps?.subject || ''} experience={teacherProps?.experience || ''} />;
      }
    }
  };

  return (
    <div {...props} className={`user-profile-card ${props.className || ''}`}>
      {renderContent()}
      {children}
    </div>
  );
}

export default UserProfileCard;
