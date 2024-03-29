import UserProfileCard, { ProfileType } from "./components/userProfileCard/UserProfileCard";
import { customStudentProfileRender } from "./components/studentProfile/StudentProfile";

const App = () => {

  return (
    <div>
      <UserProfileCard
        name="Иван Петров"
        description="Ученик 11 класса, интересуется математикой и программированием"
        render={customStudentProfileRender}
      />
      <UserProfileCard
        name="Людмила Иванова"
        description="Профессионал высшей категории"
        teacherProps={{
          subject: "Математика",
          experience: "5 лет"
        }}
        profileType={ProfileType.Teacher}
      >
        <p>Email: example@example.com</p>
        <p>LinkedIn: linkedin.com/in/example</p>
      </UserProfileCard>
    </div>
  );
}

export default App;