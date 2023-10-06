
const UserProfile = ({params}:any)=>{
    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h2>Profile </h2>
            <hr/>
            <h2 className="text-4xl">Profile page <span className="p-2 rounded bg-blue-500">{params.id}</span></h2>
        </div>
    )
    }
    
    export default UserProfile;