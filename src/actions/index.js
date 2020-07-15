
export const setSidebarOpen = () => {
    console.log("opennn")
    return {
        type: "SETSIDEBAROPEN",
        payload: true
    }
}

export const setSidebarClose = () => {
    return {
        type: "SETSIDEBARCLOSE",
        payload: false
    }
}

export const userLogin = (email, password) => {
    return {
        type: "USERLOGIN",
        email: email,
        password: password
    }
}