export function getErrorMessage(code: string) {
    switch (code) {
        case "auth/popup-closed-by-user":
            return "You closed sign up pop-up";
        case "auth/invalid-email":
            return "Invalid Email";
        case "auth/invalid-display-name":
            return "Invalid Name";
        case "auth/invalid-password":
            return "Invalid Password";
        case "auth/operation-not-allowed":
            return "Operation not allowed";
        case "auth/user-not-found":
            return "User not found";
        case "auth/email-already-exists":
            return "Email already exists";
        case "auth/weak-password":
            return "Weak password";
        default:
            return "Something wrong happened";
    }
}