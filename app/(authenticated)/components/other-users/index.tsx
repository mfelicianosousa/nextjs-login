import Link from "next/link";
import React from "react";
import { getUsers } from "../../users/services/get-users";

type Props ={
    currentUserId: string; 
}

export default function OtherUsers({ currentUserId }: Props ) {
    const [otherUsers, setOtherUsers ] = React.useState([]);
    
    React.useEffect(() => {
        (async () =>{
            const users = await getUsers();

            setOtherUsers(
                users.filter((user: any) => user.id !== parseInt(currentUserId))
            )
        })()

    },[currentUserId,setOtherUsers]);

    if (otherUsers.length === 0) {
        return <>Carregando ...</>;
    }
    return (
        <ul>
            {otherUsers.map((user: any) => (

                <li key={user.id}> 
                    <Link href={`/users/${user.id}`}>
                       {user.first_name} {user.last_name} ({user.email})
                    </Link>
                </li> 
            ))}         
        </ul>
    )
}