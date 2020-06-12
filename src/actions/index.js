export const MODIFY_MODE= 'MODIFY_MODE'

export function modifyBook(book, mode){
    return {
        type: 'MODIFY_MODE',
        book,
        mode
    }
}
