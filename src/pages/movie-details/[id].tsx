import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import FilmApi, { Film } from "@/services/Api/FilmApi";
import {
  Calendar,
  Clock,
  Globe,
  MapPin,
  Star,
  Trophy,
  Users,
  DollarSign,
  Disc,
  Building,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function MovieDetails() {
  const [genres, setGenres] = useState<string[]>([]);
  const [actors, setActors] = useState<string[]>([]);
  const [countries, setCountries] = useState<string[]>([]);
  const [movieDetails, setMovieDetails] = useState<Film>();

  const router = useRouter();
  const movieId = router.query.id as string;

  useEffect(() => {
    if (!router.isReady || !movieId) return;

    async function fetchData() {
      try {
        const res = await FilmApi.getById(movieId);
        setMovieDetails(res);
        setGenres(res.genre.split(", "));
        setActors(res.actors.split(", "));
        setCountries(res.country.split(", "));
      } catch (error) {
        console.error("Erro ao buscar filme:", error);
      }
    }
    fetchData();
  }, [router.isReady, movieId]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-2">
            {movieDetails?.title}
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400">
            ({movieDetails?.year})
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-1 ">
            <Card className="overflow-hidden py-0 ">
              <CardContent className="p-0">
                <Image
                  src={movieDetails?.poster || "/placeholder.svg"}
                  alt={`${movieDetails?.title} poster`}
                  width={400}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-5 w-5" />
                  Informações Básicas
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-slate-500" />
                    <span className="font-medium">Diretor:</span>
                    <span>{movieDetails?.director}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-slate-500" />
                    <span className="font-medium">Duração:</span>
                    <span>{movieDetails?.runtime}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-slate-500" />
                    <span className="font-medium">Lançamento:</span>
                    <span>{movieDetails?.released}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">{movieDetails?.rated}</Badge>
                  </div>
                </div>

                <div>
                  <span className="font-medium">Roteirista:</span>
                  <span className="ml-2">{movieDetails?.writer}</span>
                </div>

                <div>
                  <span className="font-medium">Gêneros:</span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {genres.map((genre, index) => (
                      <Badge key={index} variant="secondary">
                        {genre}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="font-medium">Elenco Principal:</span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {actors.map((actor, index) => (
                      <Badge key={index} variant="outline">
                        {actor}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Sinopse</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  {movieDetails?.plot}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5" />
              Avaliações
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              {movieDetails?.ratings.map((rating, index) => (
                <div
                  key={index}
                  className="text-center p-4 bg-slate-50 dark:bg-slate-800 rounded-lg"
                >
                  <div className="font-semibold text-lg text-slate-900 dark:text-slate-100">
                    {rating.value}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    {rating.source}
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-yellow-500" />
                <span className="font-medium">IMDb Rating:</span>
                <span>{movieDetails?.imdbRating}/10</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-slate-500" />
                <span className="font-medium">IMDb Votes:</span>
                <span>{movieDetails?.imdbVotes}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building className="h-5 w-5" />
                Informações de Produção
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-slate-500" />
                <span className="font-medium">Idioma:</span>
                <span>{movieDetails?.language}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-slate-500" />
                <span className="font-medium">País:</span>
                <div className="flex flex-wrap gap-1">
                  {countries.map((country, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {country}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Building className="h-4 w-4 text-slate-500" />
                <span className="font-medium">Produção:</span>
                <span>{movieDetails?.production}</span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="h-4 w-4 text-slate-500" />
                <span className="font-medium">Bilheteria:</span>
                <span className="font-semibold text-green-600">
                  {movieDetails?.boxOffice}
                </span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-5 w-5" />
                Prêmios e Informações Extras
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <span className="font-medium">Prêmios:</span>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                  {movieDetails?.awards}
                </p>
              </div>
              <Separator />
              <div className="flex items-center gap-2">
                <Disc className="h-4 w-4 text-slate-500" />
                <span className="font-medium">DVD:</span>
                <span>{movieDetails?.DVD}</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-slate-500" />
                <span className="font-medium">Metascore:</span>
                <Badge variant="secondary">{movieDetails?.metascore}/100</Badge>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">IMDb ID:</span>
                <code className="text-xs bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">
                  {movieDetails?.imdbID}
                </code>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
