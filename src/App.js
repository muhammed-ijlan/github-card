import Card from "./Card";
import InputForm from "./InputForm";
import { useSelector } from "react-redux"

function App() {

  const { userInfo } = useSelector((state) => state.user)

  console.log(userInfo);

  return (
    <div className="min-h-screen bg-gray-200 flex flex-col items-center justify-center antialiased">
      <p className="font-bold text-4xl mt-5 ">Enter a Github username</p>
      <InputForm />
      {userInfo && <Card user={userInfo} />}
    </div>
  );
}

export default App;
