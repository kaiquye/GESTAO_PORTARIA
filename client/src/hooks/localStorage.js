const item = '@Token';


export default function useStorageToken() {
    return ({
        get: function () {
            return localStorage.getItem(item);
        },
        set: function (Token) {
            return localStorage.setItem(item, Token);
        },
        logOff: function () {
            return localStorage.removeItem(item);
        }
    })
}