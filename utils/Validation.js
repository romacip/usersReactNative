const validateOnlyLetters = (text) => {
    const pattern = new RegExp('^[A-Z]+$', 'i');
    if(!pattern.test(text)){
        return 'Ingresa caracteres válidos';
    }

    if(text.length >= 2 && text.length <= 10){
        return text;
    }
    
    return 'El texto debe ser mayor a 2 caracteres y menor a 10';
}

export default {
    validateOnlyLetters
}