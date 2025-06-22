# Customer Favorite Product - API

API para gerenciamento dos **produtos favoritos dos clientes**.

> Feita com NestJS, Prisma e PostgreSQL, seguindo boas práticas de arquitetura, Clean Architecture.

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

* **Docker** instalado
* **Docker Compose** instalado
* Node.js instalado (opcional, apenas se quiser rodar local sem docker)
* **make** instalado *_**Opcional**_


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

## 📜 Scripts Úteis

| Comando                                          | Descrição                             |
| ------------------------------------------------ | ------------------------------------- |
| `docker compose up --build`                      | Sobe tudo com rebuild                 |
| `docker exec -it app.cfp yarn start:dev`         | Rodar em modo dev dentro do container |
| `docker exec -it app.cfp sh`                     | Entrar no container                   |
| `docker exec -it app.cfp npx prisma migrate dev` | Rodar migrations                      |
| `docker exec -it app.cfp yarn add <package>`     | Instalar pacote no container          |
| `docker exec -it app.cfp node -e ...`            | Gerar token secreto                   |

---

## 🚀 Roadmap Futuro (Sugestões)

* [ ] Adicionar testes unitários e de integração
* [ ] Implementar CI/CD
* [ ] Documentação OpenAPI/Swagger
* [ ] Observabilidade (Logs, Metrics e Tracing)
* [ ] Deploy em ambientes cloud (AWS, GCP, Azure, Railway, etc.)

