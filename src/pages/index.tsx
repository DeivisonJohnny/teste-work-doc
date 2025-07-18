"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import FilmApi from "@/services/Api/FilmApi";
import { useRouter } from "next/router";

interface Movie {
  id: string;
  title: string;
  year: string;
  imdbID: string;
  type: string;
  poster: string;
}

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);
  const [limit] = useState(8);
  const [totalPages, setTotalPages] = useState(1);

  const router = useRouter();

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await FilmApi.listPosterWithPagination({ page, limit });
        setMovies(res.data);
        setTotalPages(res.totalPages);
      } catch (error) {
        console.error("Erro ao buscar filmes:", error);
      }
    }
    fetchData();
  }, [page]);

  async function handleSearch() {
    try {
      const { data } = await FilmApi.listPosterWithPagination({
        search: searchTerm,
      });
      setMovies(data);
    } catch (error) {}
  }

  useEffect(() => {
    handleSearch();
  }, [searchTerm]);

  const getTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case "movie":
        return "bg-blue-100 text-blue-800 hover:bg-blue-200";
      case "series":
        return "bg-green-100 text-green-800 hover:bg-green-200";
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-200";
    }
  };

  return (
    <div className="w-full px-16 py-8 bg-white">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-center text-black mb-2">
          Catálogo de Filmes
        </h1>
        <p className="text-muted-foreground text-center mb-6">
          Descubra e explore nossa coleção de filmes e séries
        </p>

        <div className="relative max-w-md mx-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            type="text"
            placeholder="Buscar filmes pelo título..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 text-black"
          />
        </div>
      </div>

      <div className="mb-6">
        <p className="text-sm text-muted-foreground">
          {movies.length}{" "}
          {movies.length === 1
            ? "resultado encontrado"
            : "resultados encontrados"}
          {searchTerm && <span className="ml-1">para "{searchTerm}"</span>}
        </p>
      </div>

      {movies.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6">
          {movies.map((movie) => (
            <Card
              key={movie.imdbID}
              className="overflow-hidden hover:shadow-lg transition-shadow duration-300 py-0 pb-6 cursor-pointer"
              onClick={() => router.push(`/movie-details/${movie.id}`)}
            >
              <div className="aspect-[2/3] relative">
                <Image
                  src={movie.poster || "/placeholder.svg"}
                  alt={movie.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-semibold line-clamp-2 min-h-[2.5rem]">
                  {movie.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground font-medium">
                    {movie.year}
                  </span>
                  <Badge
                    variant="secondary"
                    className={`text-xs capitalize ${getTypeColor(movie.type)}`}
                  >
                    {movie.type}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
          <p className="text-lg">Nenhum filme encontrado</p>
          <p className="text-sm">Tente buscar com um termo diferente</p>
        </div>
      )}

      <div className="flex justify-center items-center gap-4 mt-10">
        <Button
          variant="outline"
          disabled={page === 1}
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
        >
          Anterior
        </Button>
        <span className="text-muted-foreground">
          Página {page} de {totalPages}
        </span>
        <Button
          variant="outline"
          disabled={page === totalPages}
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
        >
          Próxima
        </Button>
      </div>
    </div>
  );
}
