const regex = {
  name: /^[a-zA-ZAáéíóúñüy\s]{0,80}$/, // solo letras, de 3 a 80 caracteres
  cellphone: /^\d{0,20}$/, // solo números, de 8 a 20 caracteres
};

export const handleValidate = (e) => {
  switch (e.target.name) {
    case "fullName":
      if (!regex.name.test(e.target.value.trim())) {
        alert("No puede usar caracteres especiales");
        e.target.value = e.target.value.slice(0, -1);
        return false;
      }
      return true;

    case "celular":
      if (!regex.cellphone.test(e.target.value.trim())) {
        alert("Celular inválido");
        e.target.value = e.target.value.slice(0, -1);
        return false;
      }
      return true;

    default:
      return true;
  }
};
