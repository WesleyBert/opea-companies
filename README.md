# 🏢 Opea Cadastro de Empresas

Sistema web para cadastro, listagem, edição, busca e exclusão de empresas, desenvolvido em **React + TypeScript** com integração a uma API RESTful.

## ✨ Funcionalidades

- ✅ **Listagem de empresas** cadastradas em cards
- ➕ **Cadastro** de nova empresa via modal
- ✏️ **Edição** de empresa existente (basta clicar no card)
- ❌ **Exclusão** de empresa (ícone de lixeira no modal de edição)
- 🔍 **Busca dinâmica** por nome, CNPJ ou e-mail (campo "Buscar empresa...")
- 📱 **Layout responsivo** e moderno, inspirado no Figma
- 🔒 **Validação de CNPJ** (apenas números, 14 dígitos)
- 🖼️ **Modal** para cadastro e edição
- 🌙 **Alternância de tema** (claro/escuro)
- 💬 **Chat de suporte** integrado (ícone de interrogação no canto)

## 🚀 Tecnologias Utilizadas

- React
- TypeScript
- SASS (SCSS Modules)
- Axios
- Vite
- React Icons

## 📦 Instalação

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/WesleyBert/opea-companies.git
   cd opea-companies
   ```
2. **Instale as dependências:**
   ```bash
   npm install
   ```
3. **Inicie o projeto:**
   ```bash
   npm run dev
   ```
4. **Acesse em:**  
   [http://localhost:5173](http://localhost:5173)

## 🔗 API

- **Base URL:**  
  [https://piysgkm5oc.execute-api.sa-east-1.amazonaws.com/dev/companies](https://piysgkm5oc.execute-api.sa-east-1.amazonaws.com/dev/companies)

- **Formato do objeto empresa:**

  ```json
  {
    "id": "string",
    "name": "Nome da Empresa",
    "cnpj": "12345678000199",
    "email": "empresa@email.com"
  }
  ```

- **Métodos disponíveis:**  
  `GET`, `POST`, `PUT`, `DELETE`

## 🖥️ Layout

O layout é responsivo, adaptando-se a dispositivos móveis e desktops, e foi baseado no Figma do desafio.

## 📝 Como usar

1. **Adicionar Empresa:**  
   Clique no botão **"Adicionar Empresa"** e preencha os campos **Nome**, **CNPJ** (apenas números) e **E-mail** no modal. Clique em **"Cadastrar"** para salvar.

2. **Buscar Empresa:**  
   Use o campo **"Buscar empresa..."** para filtrar empresas por nome, CNPJ ou e-mail.

3. **Editar Empresa:**  
   Clique sobre o card da empresa desejada, altere os dados no modal e clique em **"Salvar"**.

4. **Excluir Empresa:**  
   No modal de edição, clique no ícone de lixeira para remover a empresa.

5. **Alternar Tema:**  
   Use o botão de sol/lua no topo para alternar entre modo claro e escuro.

6. **Suporte:**  
   Clique no ícone de interrogação no canto inferior direito para abrir o chat de suporte.

## 📸 Preview

## 👨‍💻 Como contribuir

1. Faça um fork do projeto
2. Crie uma branch para sua feature/fix:
   ```bash
   git checkout -b minha-feature
   ```
3. Commit suas alterações:
   ```bash
   git commit -m 'feat: minha nova feature'
   ```
4. Push na sua branch:
   ```bash
   git push origin minha-feature
   ```
5. Abra um Pull Request

---

Feito por Wesley Berto.
