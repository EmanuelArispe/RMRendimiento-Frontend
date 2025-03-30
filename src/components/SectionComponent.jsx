
import UserListComponent from "./crudComponents/UserListComponent.jsx";
import UserByIdComponent from "./crudComponents/UserByIdComponent.jsx";
import UserFormComponent from "./crudComponents/UserFormComponent.jsx";
import UserDeleteComponent from "./crudComponents/UserDeleteComponent.jsx";

// eslint-disable-next-line react/prop-types
export default function SectionComponent({token,children}) {

    if(children === 'get') {
        return (
           <UserListComponent tokenValue={token}/>
        )
    }
    if(children === 'put') {
        return (
           <UserFormComponent/>
        )
    }
    if(children === 'search') {
        return (
           <UserByIdComponent/>
        )
    }
    if (children === 'delete'){
        return (
            <UserDeleteComponent/>
        )
    }
    return ( <p>{children}</p> )
}