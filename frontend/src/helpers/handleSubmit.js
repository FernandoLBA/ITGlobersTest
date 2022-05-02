const regex = {
  email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  age: /^\d{1,3}$/, // solo números, de 1 a 3 caracteres
};

export const handleSubmit = (e, state, setState) => {
  e.preventDefault();
  const form = e.target;

  for (let i = 0; i < form.length; i++) {
    if (form[i].name === "fullName") {
      if (form[i].value.trim().length < 7) {
        alert("Coloque el nombre completo");
        form[i].select();
        return false;
      }
    }

    if (form[i].name === "email") {
      if (!regex.email.test(form[i].value.trim())) {
        alert("Email inválido");
        form[i].select();
        return false;
      }
    }
    
    if(form[i].name === "celular"){
      if (form[i].value.trim().length < 7) {
        alert("Celular inválido");
        form[i].select();
        return false;
      }
    }

    if (form[i].name === "rangoEdad") {
      if (!regex.age.test(form[i].value.trim())) {
        alert("No puede usar letras ni caracteres especiales");
        form[i].select();
        return false;
      }

      if (form[i].value < 18 || form[i].value > 100) {
        alert("Edad inválida, verifique el rango");
        form[i].select();
        return false;
      }
    }
  }

  console.log(state);
  setState({});
  return true;
};
