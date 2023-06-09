import { useEffect, useState } from "react";

import UserService from "../../services/user.service";

import { Navbar } from "../../components/Navbar/Navbar";
import UserGrid from "../../components/AdminUserDataSection/UserGrid";

function Admin() {
      const [users, setUsers] = useState([]);

      useEffect( () => {
            async function fetchUsers() { 
                  try {
                        const userService = new UserService();
                        const currentUsers = await userService.getAllUsers();
                        setUsers(currentUsers);
                  } catch (error) {
                        console.log(error);
                  }
            }
            fetchUsers();
           
      }, []);

     


	return (
            <>
                  <Navbar />
                  <UserGrid users={users}/>
            
            </>
      );
}

export default Admin