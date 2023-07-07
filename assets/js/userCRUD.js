const userList = document.getElementById("userList");

let users = [];

// Función para cargar personas desde el HTML
function createUser() { // Obtener los elementos "user" dentro de la lista de personas
    const userData = userList.getElementsByTagName("user");

    // Recorrer los elementos y extraer los datos
    for (let i = 0; i < userData.length; i++) {
        const tmpUser = userData[i];
        const id = parseInt(tmpUser.getAttribute("data-id"));
        const name = tmpUser.getAttribute("data-name");
        const lastName = tmpUser.getAttribute("data-lastName");

        // Crear el objeto persona y agregarlo al arreglo
        const user = { id, name, lastName: [] };
        users.push(user);
    }
}

function readUser() {
    const userData = userList.getElementsByTagName("user");

    // Recorrer los elementos y extraer los datos
    for (let i = 0; i < userData.length; i++) {
        const tmpUser = userData[i];
        const id = parseInt(tmpUser.getAttribute("data-id"));
        const name = tmpUser.getAttribute("data-name");
        const lastName = tmpUser.getAttribute("data-lastName");

        // Crear el objeto persona y agregarlo al arreglo
        const user = { id, name, lastName: [] };
        users.push(user);
    }
    function readUser() {
        const userData = userList.getElementsByTagName("user");

        // Recorrer los elementos y extraer los datos
        for (let i = 0; i < userData.length; i++) {
            const tmpUser = userData[i];
            const id = parseInt(tmpUser.getAttribute("data-id"));
            const name = tmpUser.getAttribute("data-name");
            const lastName = tmpUser.getAttribute("data-lastName");

            // Crear el objeto persona y agregarlo al arreglo
            const user = { id, name, lastName: [] };
            users.push(user);
        }
    }
    function updateUser() {
        const userData = userList.getElementsByTagName("user");

        // Recorrer los elementos y extraer los datos
        for (let i = 0; i < userData.length; i++) {
            const tmpUser = userData[i];
            const id = parseInt(tmpUser.getAttribute("data-id"));
            const name = tmpUser.getAttribute("data-name");
            const lastName = tmpUser.getAttribute("data-lastName");

            // Crear el objeto persona y agregarlo al arreglo
            const user = { id, name, lastName: [] };
            users.push(user);
        }
    }

    function deleteUser() {
        const userData = userList.getElementsByTagName("user");

        // Recorrer los elementos y extraer los datos
        for (let i = 0; i < userData.length; i++) {
            const tmpUser = userData[i];
            const id = parseInt(tmpUser.getAttribute("data-id"));
            const name = tmpUser.getAttribute("data-name");
            const lastName = tmpUser.getAttribute("data-lastName");

            // Crear el objeto persona y agregarlo al arreglo
            const user = { id, name, lastName: [] };
            users.push(user);
        }
    }
    // Llamar a las funciones para cargar los datos desde el HTML
    loadUsers();
}