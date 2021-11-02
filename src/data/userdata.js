import store from "store";

const getUserData = () => ({
    user: store.get('user') || ""
})

export default getUserData