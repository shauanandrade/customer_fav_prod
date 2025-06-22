# Customer Favorite Product - API

API para gerenciamento dos **produtos favoritos dos clientes**.

> Feita com NestJS, Prisma e PostgreSQL, seguindo boas práticas de arquitetura, Clean Architecture.

## 🚀 Documentação da API

- 🔗 [Documentação Swagger Online](https://cfp.saprojetos.dev/docs)
- 📄 [OpenAPI JSON](./swagger.json)
---

## 🚀 Stack Tecnológica

* 🐳 **Docker**
* 🔥 **NestJS (Node.js + TypeScript)**
* 🐘 **PostgreSQL**
* 🔮 **Prisma ORM**
* 🧠 **Arquitetura Modular + Clean Architecture + SOLID na medida**

---

## 🏛️ Arquitetura

O projeto segue uma arquitetura baseada nos seguintes pilares:

### ✔️ Modularização

Cada domínio da aplicação possui seu próprio módulo, isolado, independente e autocontido.

### ✔️ Clean Architecture (Arquitetura Limpa)

* Camadas bem definidas e separadas:

    * **Applications (Interface)**: Controllers e rotas (HTTP, Webhook, etc.).
    * **UseCases (Domínio)**: Regras de negócio.
    * **Infra**: Implementações concretas (Repositórios, Banco de Dados, Providers).

### ✔️ SOLID (na medida)

* Principais princípios aplicados onde faz sentido:

    * **Inversão de Dependência**
    * **Responsabilidade Única**
    * **Aberto/Fechado** (para extensão, não modificação)

---

## 📁 Estrutura de Pastas

```bash
src
├── common               # Compartilhado entre módulos (guards, types, enums, etc.)
├── modules              # Módulos da aplicação (Domínios)
│   ├── authentication   # Autenticação
│   ├── peoples          # Gestão de pessoas/clientes
│   │   ├── applications # Controllers (camada de entrada)
│   │   │   └── http
│   │   ├── infra        # Implementações (repositories, providers, dtos)
│   │   └── usecases     # Casos de uso (regras de negócio)
│   └── products         # Gestão de produtos
├── prisma               # Prisma (ORM) - schema, migrations, seeds
├── app.module.ts        # Agregador principal dos módulos
├── main.ts              # Bootstrap da aplicação
```

---

## 🏗️ Como Rodar o Projeto

### ✅ Pré-requisitos

* **Git** instalado
* **Docker** instalado
* **Docker Compose** instalado
* **make** instalado *_**Opcional**_
* Node.js instalado (opcional, apenas se quiser rodar local sem docker)

### 🔗 Clone o projeto do GitHub

```bash
git clone https://github.com/shauanandrade/customer_fav_prod.git
cd customer_fav_prod
```
---

### 🔐 Configure o ambiente

1️⃣ Renomeie o arquivo `.env.sample` para `.env`:

```bash
mv .env.sample .env
```

2️⃣ Edite o arquivo `.env` e configure a conexão com o banco PostgreSQL:

```env
DATABASE_URL="postgresql://postgres:postgres@SEU_IP_LOCAL:5440/api_cfp?schema=public"
```

> 🔸 *Troque `SEU_IP_LOCAL` pelo seu IP ou `localhost` se estiver rodando localmente.*

---

## 🐳 Subindo o projeto com Docker

### ▶️ Subir containers e fazer build (sem Makefile)

```bash
docker compose down --rmi=all
docker compose up --build --wait
```

> 🔥 Isso garante que qualquer imagem antiga seja removida e a aplicação suba do zero.

### ▶️ Usando Makefile (se tiver instalado)

```bash
make build
```

> 🔥 Faz exatamente a mesma coisa: remove containers e imagens e sobe tudo do zero.

---

## 🔑 Gerando o token para JWT

### ▶️ Com Docker (sem Makefile)

```bash
docker exec -it app.cfp node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

### ▶️ Usando Makefile

```bash
make token
```

> Copie o token que será exibido no terminal e cole no arquivo `.env` na variável `JWT_SECRET`.

---

## 🏗️ Rodando as migrations (Banco de Dados)

### ▶️ Com Docker

```bash
docker exec -it app.cfp npx prisma migrate dev --name init
```

### ▶️ Com Makefile

```bash
make migrate
```

---

## 🚀 Rodando a aplicação

### ▶️ Com Docker

```bash
docker exec -it app.cfp yarn start:dev
```

### ▶️ Com Makefile

```bash
make dev
```

---

## ⚙️ Opções úteis durante o desenvolvimento

### 🔍 Acessar o terminal do container

* **Via Docker direto:**

```bash
docker exec -it app.cfp sh
```

* **Via Makefile:**

```bash
make container
```

---

### 📦 Instalar dependências (sem entrar no container)

* **Via Docker direto:**

```bash
docker exec -it app.cfp yarn add nome-da-dependencia
```

* **Via Makefile:**

```bash
make cmd yarn="add nome-da-dependencia"
```

---

## 🏁 Resumo dos principais comandos

| Tarefa                        | Docker                                                                                             | Makefile                   |
| ----------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------- |
| Build e subir tudo            | `docker compose down --rmi=all && docker compose up --build --wait`                                | `make build`               |
| Gerar JWT\_SECRET             | `docker exec -it app.cfp node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"` | `make token`               |
| Rodar migrations              | `docker exec -it app.cfp npx prisma migrate dev --name init`                                       | `make migrate`             |
| Subir aplicação em modo dev   | `docker exec -it app.cfp yarn start:dev`                                                           | `make dev`                 |
| Acessar terminal do container | `docker exec -it app.cfp sh`                                                                       | `make container`           |
| Instalar dependência          | `docker exec -it app.cfp yarn add nome`                                                            | `make cmd yarn="add nome"` |

## 🗺️ Fluxo da Arquitetura

```plaintext
HTTP Request
    ↓
Controller (applications/http)
    ↓
UseCase (usecases)
    ↓
Repository/Provider (infra)
    ↓
Banco de Dados / Serviços externos
```

> 🔥 *Controllers só recebem e distribuem.*
> 🔥 *UseCases concentram toda a lógica.*
> 🔥 *Infra implementa os contratos definidos pela aplicação.*

---