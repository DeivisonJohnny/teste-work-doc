import { NextApiRequest, NextApiResponse } from "next";
import { NextConnect } from "next-connect";
import FilmController from "./controllers/FilmController";

export default function routes(
  api: NextConnect<NextApiRequest, NextApiResponse>
) {
  api.get("/film-poster", FilmController.listFilmPoster);

  api.get("/film", FilmController.getFilmById);

  return api;
}
