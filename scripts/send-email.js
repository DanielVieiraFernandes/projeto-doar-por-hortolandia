const form = document.querySelector("#contactForm");
const button = document.querySelector("#sendButton");
const btnText = document.querySelector("#btnText");
const spinner = button.querySelector("#spin");

const elements = form.querySelectorAll("input, select, textarea, button");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  button.setAttribute("disabled", "true");
  btnText.textContent = "Enviando...";
  spinner.classList.add("spinner");

  const formData = new FormData(form);

  const email = Object.fromEntries(formData.entries()).email;

  form.reset();
  elements.forEach(el => el.disabled = true);
  try {
    await fetch(`https://formsubmit.co/ajax/${email}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    });

    alert("Mensagem enviada com sucesso!");
  } catch (error) {
    console.error("Erro ao enviar o formulário:", error);
    alert("Houve um erro ao enviar a mensagem. Tente novamente.");
  } finally {
    button.removeAttribute("disabled");
    btnText.textContent = "Enviar Mensagem";
    spinner.classList.remove("spinner");
    elements.forEach(el => el.disabled = false);
  }
});
