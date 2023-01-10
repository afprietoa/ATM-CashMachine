export class Authentication{
    static login(user, username, password) {

        if("authenticable" in user && user.authenticable instanceof Function)
            return user.authenticable(username, password)
        else
            return false
    }
}