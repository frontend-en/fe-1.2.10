import React, { ReactNode, HTMLAttributes } from 'react';
import './UserProfileCard.css';

interface UserProfileProps {
  name?: string;
  photo?: string;
  description?: string;
  render?: (props: { name?: string; photo?: string; description?: string }) => ReactNode;
}
const UserProfileCard: React.FC<UserProfileProps & HTMLAttributes<HTMLDivElement>> = ({
  name,
  photo,
  description,
  render,
  children,
  ...props
}) => {
  return (
    <div {...props} className={`user-profile-card ${props.className || ''}`}>
      {render ? (
        render({ name, photo, description })
      ) : (
        <>
          {children}
        </>
      )}
    </div>
  );
}

export default UserProfileCard;
