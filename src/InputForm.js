import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux"
import { fetchData } from "./redux/userSlice"

function InputForm() {
  const [userInput, setUserInput] = useState("");
  const [userId, setUserId] = useState("")
  const [userName, setUserName] = useState("")
  const [userImg, setUserImg] = useState("")
  const [repo, setRepo] = useState("")
  const [gist, setGist] = useState("")
  const [created, setCreated] = useState("")

  const dispatch = useDispatch()

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`https://api.github.com/users/${userInput}`, {
        headers: {
          'Authorization': `Bearer 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`,
          'Content-Type': 'application/json',
          'Accept': 'application/vnd.github.v3+json'
        }
      });

      setUserId(res.data.login)
      setUserName(res.data.name)
      setUserImg(res.data.avatar_url)
      setRepo(res.data.public_repos)
      setGist(res.data.public_gists)
      setCreated(res.data.created_at.split("T")[0])

    };

    fetchUser()
  }, [userInput])

  const submitHandler = () => {
    dispatch(fetchData({ userId, userName, userImg, repo, gist, created }))
  }

  return (
    <div className="pt-5">
      <div class="p-6 max-w-lg mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
        <form className="ml-10" onSubmit={(e) => e.preventDefault()}>
          <input
            onChange={(e) => setUserInput(e.target.value)}
            className="h-10 w-56 border  rounded focus:outline-none ring-2  border-transparent ring-purple-600 "
          />
          <button
            onClick={submitHandler}
            className=" text-white bg-purple-600 h-10 w-36 ml-4 hover:bg-purple-700 rounded focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 ..."
          >
            Search..
          </button>
        </form>
      </div>
    </div>
  );
}

export default InputForm;
