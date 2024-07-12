import { useGetUser } from "./GetUserProvider";

const ShowUserData = () => {
    const { userData } = useGetUser();

    return (
        <>
            {userData &&
                <div>
                    <p>Nombre: {userData.name ? userData.name : "Not defined" }</p>
                    <p>Nombre de usuario: {userData.login}</p>
                    <p>Seguidores: {userData.followers}</p>
                    <p>Repositorios publicos: {userData.public_repos}</p>
                    <img src={userData.avatar_url}/>
                </div>
            }
        </>
    )
}

export default ShowUserData;