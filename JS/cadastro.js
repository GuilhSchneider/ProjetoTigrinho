function cadastrar(){
    Swal.fire({
      title: "Seja Bem vindo",
      text: "Cadastro Feito",
      icon: "success"
    });
    setInterval(() => {
        Swal.fire({
            title: "Deseja salvar a sua senha??",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Salvar",
            denyButtonText: `Não salvar`
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              Swal.fire("Senha salvada");
            } else if (result.isDenied) {
              Swal.fire("A senha não foi salvada");
            }
          });
    setInterval(() => {
        window.location.href='deposito.html'
    }, 3000);
        }, 3000);
  }
