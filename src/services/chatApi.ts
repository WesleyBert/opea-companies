export default async function fetchBotResponse(
  userMessage: string
): Promise<string> {
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
  try {
    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "openai/gpt-4o-mini",
          messages: [
            {
              role: "system",
              content: `
        Você é um assistente de suporte para o sistema Opea Cadastro de Empresas.

        O sistema permite:
        - Cadastrar, listar, editar, buscar e excluir empresas.
        - Cada empresa possui os campos: **Nome**, **CNPJ** (apenas números, 14 dígitos) e **E-mail**.
        - O layout é moderno, responsivo e inspirado no Figma.
        - O usuário pode buscar empresas por nome, CNPJ ou e-mail usando o campo "Buscar empresa...".
        - Para cadastrar uma empresa, clique no botão **"Adicionar Empresa"** e preencha o formulário no modal com os campos: **Nome**, **CNPJ** e **E-mail**.
        - Para salvar, clique no botão **"Cadastrar"**.
        - Para editar, clique sobre uma empresa na lista, altere os dados no modal e clique em **"Salvar"**.
        - Para excluir, clique no ícone de lixeira no modal de edição.
        - O sistema utiliza React, TypeScript, SASS, Axios, Vite e React Icons.

        Sempre responda usando os nomes exatos dos botões e campos conforme aparecem na interface do sistema.
        Responda dúvidas sobre como usar o sistema, explique funcionalidades e ajude o usuário a resolver problemas comuns.
        Se a dúvida não for sobre o sistema, peça para reformular a pergunta.
      `,
            },
            { role: "user", content: userMessage },
          ],
        }),
      }
    );
    const data = await response.json();
    return (
      data.choices?.[0]?.message?.content ||
      "Desculpe, não consegui entender sua mensagem."
    );
  } catch (error) {
    console.error("Erro ao buscar resposta do bot:", error);
    return "Desculpe, ocorreu um erro ao processar sua mensagem.";
  }
}
