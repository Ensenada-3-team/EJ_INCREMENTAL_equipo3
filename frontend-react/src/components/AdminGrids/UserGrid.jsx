function UserGrid(props) {

      function formatDate(date, includeTime = false) {
            const options = {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
              hour: includeTime ? '2-digit' : undefined,
              minute: includeTime ? '2-digit' : undefined,
              second: includeTime ? '2-digit' : undefined,
            };
            return new Date(date).toLocaleDateString('es-ES', options);
      }


      return (
          <div className="container-fluid card">
              <h2>Usuarios registrados</h2>
              <div className="row">
                  <div className="col">
                      <div className="table-fluid rounded sombra">
                          <table className="table border border-dark text-center align-middle table-hover table-striped">
                              <thead className="border border-dark border-3 text-sm-start">
                                  <tr className="fs-4 text-center align-middle bg-light">
                                      <th className="border border-dark">ID</th>
                                      <th>Rol</th>
                                      <th>Alias</th>
                                      <th>Nombre</th>
                                      <th>Apellido</th>
                                      <th>Email</th>
                                      <th>Ocupacion</th>
                                      <th>Ubicación</th>
                                      <th>Fecha Nac.</th>
                                      <th>Género</th>
                                      <th>Linkedin</th>
                                      <th>Idioma</th>
                                      <th>última conexión</th>
                                  </tr>
                              </thead>
                              <tbody>
                                  {props.users.map((user) => (
                                      <tr key={user.user_id}>
                                          <td className="border border-dark">{user.user_id}</td>
                                          <td>{user.role}</td>
                                          <td>{user.nickname}</td>
                                          <td>{user.name}</td>
                                          <td>{user.firstname}</td>
                                          <td>{user.email}</td>
                                          <td>{user.ocupation}</td>
                                          <td>{user.location}</td>
                                          <td>{formatDate(user.birthdate)}</td>
                                          <td>{user.gender}</td>
                                          <td>{user.linkedin}</td>
                                          <td>{user.language}</td>
                                          <td>{formatDate(user.last_login, true)}</td>
                                      </tr>
                                  ))}
                              </tbody>
                          </table>
                      </div>
                  </div>
              </div>
          </div>
      );
  }
  
  export default UserGrid;
