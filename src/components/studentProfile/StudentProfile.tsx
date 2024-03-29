export const customStudentProfileRender = (props: { name?: string; photo?: string; description?: string }) => {
  const { name, description } = props;

  return (
    <div>
      <h3>Кастомный Профиль студента</h3>
      <strong>Имя: {name}</strong>
      <p>О себе: {description}</p>
    </div>
  );
};