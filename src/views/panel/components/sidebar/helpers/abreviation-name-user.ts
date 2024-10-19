const AbreviationNameUser = ( nameUser: string, maxLength: number) => {
    return nameUser.length > maxLength
        ? nameUser.slice(0, maxLength - 3) + "..."
        : nameUser;
}

export default AbreviationNameUser