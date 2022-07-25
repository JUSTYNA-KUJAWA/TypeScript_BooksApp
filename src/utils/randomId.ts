
export const randomID = (textLength: number): string => {
    let id: string = '';
    const characters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charsAmount: number = characters.length;
    for (let i = 0; i < textLength; i++) {
        id += characters.charAt(Math.floor(Math.random() * charsAmount));
    }
    return id;
}