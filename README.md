🎬 API de Filmes: Fluxo de Requisição e ArquiteturaEste documento detalha o fluxo completo de uma requisição na API de Filmes, desde a interação no front-end até a consulta final no banco de dados. O sistema foi projetado para suportar paginação e busca por título, seguindo uma arquitetura robusta e escalável.🔄 Fluxo Completo da RequisiçãoO processo é dividido em quatro camadas distintas, demonstrando uma clara separação de responsabilidades que vai do cliente ao servidor.1. Camada do Cliente (Front-end)A interação do usuário na interface (ex: clicar no botão "próxima página") dispara uma função que utiliza um service dedicado para iniciar a comunicação com a API. Os parâmetros de paginação, como a página atual (page) e o número de itens por página (limit), são enviados neste momento.// Exemplo da chamada no componente front-end
const response = await FilmApi.listPosterWithPagination({ page, limit }); 2. Camada de Serviço (Service - FilmApi)O service atua como uma ponte entre o front-end e a API. Ele define valores padrão para os parâmetros (garantindo que a requisição funcione mesmo sem eles), monta a URL e realiza a chamada HTTP para o endpoint correspondente. Esta camada abstrai a lógica de acesso à API.export default class FilmApi {
static async listPosterWithPagination({
page = 1,
limit = 8,
search = "",
}): Promise<PaginatedResponse<Film>> {
// Monta a URL com os parâmetros e realiza a requisição GET
const endpoint = `/film-poster?page=${page}&limit=${limit}&search=${search}`;
return Api.get(endpoint);
}
} 3. Camada de Roteamento (API Route)No back-end, a requisição é recebida e direcionada para o controller apropriado com base no endpoint acessado. A rota funciona como um ponto de entrada que mapeia a URL para a lógica de negócio correspondente.// Definição da rota que mapeia o endpoint para o método do controller
api.get("/film-poster", FilmController.listFilmPoster); 4. Camada de Controle (Controller - FilmController)O controller é o cérebro da operação no back-end. Ele extrai e valida os parâmetros da requisição (page, limit, search), calcula o deslocamento (skip) para a paginação e constrói a consulta ao banco de dados utilizando o Prisma ORM.Duas consultas são executadas em paralelo (Promise.all) para otimizar o tempo de resposta:Busca de Dados: Retorna a lista de filmes paginada e, se aplicável, filtrada pelo título.Contagem Total: Conta o número total de registros que correspondem ao filtro de busca para calcular o total de páginas corretamente.Ao final, ele estrutura e envia a resposta completa para o front-end.static async listFilmPoster(req: NextApiRequest, res: NextApiResponse) {
try {
// 1. Extração e tratamento dos parâmetros da requisição
const page = parseInt(req.query.page as string) || 1;
const limit = parseInt(req.query.limit as string) || 10;
const search = req.query.search as string || "";

    // 2. Cálculo para paginação
    const skip = (page - 1) * limit;

    // 3. Montagem da condição de busca (where clause)
    const where = search
      ? { title: { contains: search, mode: 'insensitive' } } // mode: 'insensitive' para busca case-insensitive
      : {};

    // 4. Execução das consultas ao banco de forma paralela
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
      // A contagem deve usar o mesmo 'where' para ser precisa
      Prisma.filme.count({ where }),
    ]);

    // 5. Estruturação e envio da resposta
    return res.status(200).json({
      data,
      meta: {
        page,
        limit,
        totalItems: total,
        totalPages: Math.ceil(total / limit),
      }
    });

} catch (error) {
console.error(error);
return res.status(500).json({ error: "Erro interno ao buscar filmes." });
}
}
✅ Justificativa da ArquiteturaA arquitetura em camadas foi escolhida por seguir princípios fundamentais de engenharia de software, resultando em um sistema mais eficiente e de fácil manutenção.🔗 Separação de Responsabilidades (SoC)Cada camada (Front-end, Service, Controller, ORM) possui uma função única e bem definida. Isso torna o código mais limpo, mais fácil de entender e menos propenso a erros.🔄 Reutilização de CódigoA camada de service pode ser facilmente importada e utilizada por múltiplos componentes no front-end, evitando a duplicação da lógica de acesso à API.⚙️ EscalabilidadeA estrutura modular facilita a adição de novas funcionalidades. Adicionar filtros avançados, sistemas de cache ou novos endpoints pode ser feito de forma isolada, sem impactar o código existente.🧪 TestabilidadeO isolamento da lógica de negócio em controllers e services simplifica a criação de testes unitários e de integração, garantindo a qualidade e a confiabilidade do código.📦 Organização e ManutençãoA clareza na estrutura do projeto permite que novos desenvolvedores entendam o fluxo de dados rapidamente, o que reduz o custo e o tempo de manutenção e evolução da aplicação.
