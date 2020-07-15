
export const setSidebar = (state= true, action) => {
    switch (action.type) {
        case 'SETSIDEBAROPEN':
            return action.payload;

        case 'SETSIDEBARCLOSE':
            return action.payload;

        default:
            return state;
    }
}

export const userReducer = (state = false, action) => {
    switch (action.type) {
        case 'USERLOGIN':
            if(action.email === 'admin@gmail.com' && action.password === "12345"){
                localStorage.setItem('isLoggedIn', "true")
                return true;
            }else{
                localStorage.setItem('isLoggedIn', "false")
                return false;
            }

        default:
            return state;
    }
}