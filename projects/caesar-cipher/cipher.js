
let encrypt = (text, key) => {
    let encrypted = ''
    let key2 = 'abcdefghijklmnopqrstuvwxyz'
    for (let i = 0; i < text.length; i++) {
        for (let j = 0; j < key2.length; j++) {
            if (text[i] === key2[j]) {
                encrypted = encrypted + key2[j + key]
            }
        }
    }
    console.log(encrypted)
}