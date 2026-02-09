export const sendContactForm = async (data) => {
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    console.log("Status da resposta:", response.status);
    console.log("Status text:", response.statusText);

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Erro completo:", errorText);
      throw new Error(`Falha ao enviar mensagem: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Erro na função sendContactForm:", error);
    throw error;
  }
};