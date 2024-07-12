import { useGetUser } from "./GetUserProvider";

const UserInput = () => {
    const {userName, changeUserName, getUser} = useGetUser();

    const handleChangeUserName = (e) => {
        changeUserName(e.target.value);
    }

    const handleGetUserData = () => {
        getUser();
    }

    return (
        <>
            <label>Search for User:</label>
            <input type="text" value={userName} onChange={handleChangeUserName}></input>
            <button onClick={handleGetUserData}>Search</button>
        </>
    )
}

export default UserInput;
