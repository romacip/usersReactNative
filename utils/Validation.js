import Alert from 'react-native';
const validateOnlyLetters = (text) => {
  const pattern = new RegExp('^[A-Z]+$', 'i');
  if (!pattern.test(text)) {
    return alert('Regresa caracteres válidos');
  }

  if (text.length >= 2 && text.length <= 10) {
    console.log('oli');
    return text;
  }

  return alert('El texto debe ser mayor a 2 caracteres y menor a 10');
};

const validateEmail = (email) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(email)) {
    return email;
  }
  return alert("Inserta un email correcto");
};

export default {
  validateOnlyLetters,
  validateEmail,
};
