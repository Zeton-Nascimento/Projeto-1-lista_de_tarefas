# Projeto-1-lista_de_tarefas

> Um gerenciador simples de tarefas desenvolvido com **React** e **Redux Toolkit**, proporcionando uma experiência intuitiva e responsiva.

---

## 📌 Índice

- [Funcionalidades](#-funcionalidades)
- [Tecnologias](#-tecnologias)
- [Estrutura de Pastas](#-estrutura-de-pastas)
- [Instalação](#-instalação)
- [Uso](#-uso)
- [Scripts Disponíveis](#-scripts-disponíveis)

---

## ✨ Funcionalidades

- **Adicionar** novas tarefas.
- **Editar** texto de tarefas existentes.
- **Marcar** tarefas como concluídas ou pendentes.
- **Excluir** tarefas.
- **Filtrar** visualização: todas / concluídas / pendentes.

---

## 🛠️ Tecnologias

- **React** (v18+)
- **Redux Toolkit**
- **React Redux**
- **JavaScript (ES6+)**
- **HTML5**
- **CSS** (inline, flexbox simples)

---

## 📁 Estrutura de Pastas

```
todo-app/
├── README.md            # Documentação e instruções
├── package.json         # Dependências e scripts
├── public/
│   └── index.html       # Template HTML principal
└── src/
    ├── index.js         # Entry point React
    ├── App.js           # Componente raiz
    ├── store.js         # Configuração da store Redux
    ├── features/
    │   └── tasksSlice.js# Lógica central de estado de tarefas
    └── components/
        ├── TaskForm.js  # Formulário de criação de tarefa
        ├── TaskList.js  # Lista de tarefas e renderização
        ├── TaskItem.js  # Item individual de tarefa
        └── Filter.js    # Botões de filtro de visualização
```

---

## ⚙️ Instalação

1. **Clone** o repositório:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd todo-app
   ```
2. **Instale** as dependências:
   ```bash
   npm install
   ```

> **Nota:** Certifique-se de ter o **Node.js** (versão LTS recomendada) instalado. Faça download em https://nodejs.org

---

## ▶️ Uso

- Inicie o servidor de desenvolvimento:
  ```bash
  npm start
  ```
- Abra seu navegador em: `http://localhost:3000`

O app recarrega automaticamente sempre que alterar o código-fonte.

---

## 🧩 Scripts Disponíveis

| Script          | Descrição                                    |
| --------------- | --------------------------------------------- |
| `npm start`     | Executa o servidor de dev (hot-reload)        |
| `npm run build` | Gera versão otimizada para produção em `/build` |

---
