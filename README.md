# 🎬 Film API - Fluxo da Requisição com Paginação

Este projeto implementa uma API para listagem de filmes com suporte a paginação e busca por título. A seguir está descrito o fluxo completo da requisição, desde o front-end até a consulta ao banco de dados, incluindo uma justificativa da arquitetura adotada.

---

## 🔄 Fluxo da Requisição

### 1. 📥 Chamada no Front-end

A página inicia a requisição utilizando o service responsável pela comunicação com a API:

```ts
const res = await FilmApi.listPosterWithPagination({ page, limit });
```

````

---

### 2. ⚙️ Service (FilmApi)

No service, os parâmetros são tratados (com valores padrão) e a requisição HTTP é realizada:

```ts
export default class FilmApi {
  static async listPosterWithPagination({
    page = 1,
    limit = 8,
    search = "",
  }): Promise<PaginatedResponse<Film>> {
    return Api.get(`/film-poster?page=${page}&limit=${limit}&search=${search}`);
  }
}
```

---

### 3. 🚏 Rota da API

A requisição é direcionada para a rota da API, que aponta para o controller responsável:

```ts
api.get("/film-poster", FilmController.listFilmPoster);
```

---

### 4. 🎛️ Controller (FilmController)

O controller interpreta os parâmetros, monta a consulta e interage diretamente com o banco de dados utilizando o Prisma ORM:

```ts
static async listFilmPoster(req: NextApiRequest, res: NextApiResponse) {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const skip = (page - 1) * limit;
    const search = req.query.search as string;

    const where = search
      ? { title: { contains: search } }
      : undefined;

    const [data, total] = await Promise.all([
      Prisma.filme.findMany({
        skip,
        take: limit,
        where,
        select: {
          id: true,
          title: true,
          year: true,
          imdbID: true,
          type: true,
          poster: true,
        },
      }),
      Prisma.filme.count(),
    ]);

    return res.status(200).json({
      data,
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro ao buscar filmes" });
  }
}
```

---

## ✅ Justificativa da Arquitetura

A arquitetura adotada segue boas práticas de desenvolvimento de software, com foco em:

- **🔗 Separação de responsabilidades:** Cada camada (frontend, service, controller e banco) tem uma função específica.
- **🔄 Reutilização de código:** O service pode ser utilizado em diferentes componentes do front-end.
- **⚙️ Escalabilidade:** Fácil de estender com novos filtros, autenticação, cache, etc.
- **🧪 Testabilidade:** Isola a lógica, facilitando testes unitários e de integração.
- **📦 Organização e Manutenção:** Clareza na estrutura e facilidade de manutenção futura.

---

## 🔍 Exemplo de Requisição

```http
GET /film-poster?page=1&limit=8&search=star
```

**Resposta esperada:**

```json
{
  "data": [
    {
      "id": "uuid",
      "title": "Star Wars",
      "year": "1977",
      "imdbID": "tt0076759",
      "type": "movie",
      "poster": "https://..."
    }
  ],
  "page": 1,
  "limit": 8,
  "total": 50,
  "totalPages": 7
}
```

---

## 🧱 Estrutura de Pastas Sugerida

```
├── services/
│   └── FilmApi.ts           # Service de comunicação com a API
├── pages/api/
│   └── film-poster.ts       # Rota da API
├── controllers/
│   └── FilmController.ts    # Controller com lógica de negócio
```

---

## 🛠️ Tecnologias Utilizadas

- **Next.js (API Routes)**
- **Prisma ORM**
- **TypeScript**
- **Axios**

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Fique à vontade para abrir issues ou enviar pull requests com melhorias ou correções.

---

## 📄 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

```

---

Se quiser, posso adicionar instruções de instalação ou execução local da API também. Deseja isso?
```
````
