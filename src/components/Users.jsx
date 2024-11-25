import { useLoaderData } from "react-router-dom";

const Users = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div>
            users {data.length}
        </div>
    );
};

export default Users;