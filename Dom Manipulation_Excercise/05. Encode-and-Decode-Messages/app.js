function encodeAndDecodeMessages() {
    let encodeButton = document.querySelectorAll('button')[0];
    let decodeButton = document.querySelectorAll('button')[1];
    let messageToEncode = document.querySelectorAll('textarea')[0];
    let messageToDecode = document.querySelectorAll('textarea')[1];
        
    encodeButton.addEventListener('click', encodeClick);
    decodeButton.addEventListener('click', decodeClick);
    let decodeClicked = false;


    function encodeClick() {
        messageToDecode.value = encode(messageToEncode.value);
        messageToEncode.value = '';
    }

    function decodeClick() {
        if (decodeClicked) {
            messageToDecode.value = '';
        }

        messageToDecode.value = decode(messageToDecode.value);;
        decodeClicked = true;

    }

    function encode(message) {
        let encoded = '';
        for (const character of message) {
            encoded += String.fromCharCode(character.charCodeAt(0) + 1);
        }
        return encoded;
    }

    function decode(message) {
        let decoded = '';
        for (const character of message) {
            decoded += String.fromCharCode(character.charCodeAt(0) - 1);
        }
        return decoded;
    }
}