const form = document.querySelector("#contactForm");
const contentField = document.querySelector("#assunto");
const email = document.querySelector("#email");

const sendEmail = async (content) => {
  try {
    const response = await fetch("http://localhost:3333/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email.value,
        content,
      }),
    });

    if (!response.ok) {
      return alert("Erro ao enviar mensagem!");
    }

    alert("Formulário enviado com sucesso! Verifique seu e-mail.");
    form.reset();
  } catch (error) {
    console.log("Erro na requisição", error);
    alert("Erro ao enviar a mensagem, verifique e tente novamente");
  }
};

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const content = contentField.value;

  if (content.length === 0) {
    alert("Por favor, digite uma mensagem");
    return;
  }

  await sendEmail(content);
});
