import Prisma from "@/services/Prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default class FilmController {
  static async listFilmPoster(req: NextApiRequest, res: NextApiResponse) {
    try {
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 10;
      const skip = (page - 1) * limit;
      const search = req.query.search as string;

      const where = search
        ? {
            title: {
              contains: search,
            },
          }
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
      return res.status(500).json({ error: "Erro ao buscar filmes" });
    }
  }

  static async getFilmById(req: NextApiRequest, res: NextApiResponse) {
    const { id: movieId } = req.query;

    const movieDetail = await Prisma.filme.findUnique({
      where: {
        id: movieId as string,
      },
      include: {
        ratings: true,
      },
    });

    return res.json(movieDetail);
  }
}
