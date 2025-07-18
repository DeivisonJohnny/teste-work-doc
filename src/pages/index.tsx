"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";

interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  // Dados de exemplo no formato fornecido
  const movies: Movie[] = [
    {
      Title: "Star Wars: Episode IV - A New Hope",
      Year: "1977",
      imdbID: "tt0076759",
      Type: "movie",
      Poster:
        "https://cdn.bcdn.zip/wp-content/uploads/2025/04/hiaeZKl-120x170.png",
    },
    {
      Title: "The Matrix",
      Year: "1999",
      imdbID: "tt0133093",
      Type: "movie",
      Poster: "https://picsum.photos/200/300",
    },
    {
      Title: "Inception",
      Year: "2010",
      imdbID: "tt1375666",
      Type: "movie",
      Poster: "https://picsum.photos/200/300",
    },
    {
      Title: "The Dark Knight",
      Year: "2008",
      imdbID: "tt0468569",
      Type: "movie",
      Poster: "https://picsum.photos/200/300",
    },
    {
      Title: "Pulp Fiction",
      Year: "1994",
      imdbID: "tt0110912",
      Type: "movie",
      Poster: "https://picsum.photos/200/300",
    },
    {
      Title: "The Godfather",
      Year: "1972",
      imdbID: "tt0068646",
      Type: "movie",
      Poster: "https://picsum.photos/200/300",
    },
    {
      Title: "Breaking Bad",
      Year: "2008",
      imdbID: "tt0903747",
      Type: "series",
      Poster: "https://picsum.photos/200/300",
    },
    {
      Title: "Game of Thrones",
      Year: "2011",
      imdbID: "tt0944947",
      Type: "series",
      Poster: "https://picsum.photos/200/300",
    },
    {
      Title: "The Shawshank Redemption",
      Year: "1994",
      imdbID: "tt0111161",
      Type: "movie",
      Poster: "https://picsum.photos/200/300",
    },
    {
      Title: "Forrest Gump",
      Year: "1994",
      imdbID: "tt0109830",
      Type: "movie",
      Poster: "https://picsum.photos/200/300",
    },
    {
      Title: "The Lord of the Rings: The Fellowship of the Ring",
      Year: "2001",
      imdbID: "tt0120737",
      Type: "movie",
      Poster: "https://picsum.photos/200/300",
    },
    {
      Title: "Stranger Things",
      Year: "2016",
      imdbID: "tt4574334",
      Type: "series",
      Poster: "https://picsum.photos/200/300",
    },
  ];

  // Filtrar filmes baseado no termo de busca
  const filteredMovies = useMemo(() => {
    if (!searchTerm.trim()) {
      return movies;
    }

    return movies.filter((movie) =>
      movie.Title.toLowerCase().includes(searchTerm.toLowerCase())
    );
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
    <div className=" w-full px-16 py-8 bg-white">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-center text-black mb-2">
          Catálogo de Filmes
        </h1>
        <p className="text-muted-foreground text-center mb-6">
          Descubra e explore nossa coleção de filmes e séries
        </p>

        {/* Campo de busca */}
        <div className="relative max-w-md mx-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            type="text"
            placeholder="Buscar filmes pelo título..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {/* Contador de resultados */}
      <div className="mb-6">
        <p className="text-sm text-muted-foreground">
          {filteredMovies.length}{" "}
          {filteredMovies.length === 1
            ? "resultado encontrado"
            : "resultados encontrados"}
          {searchTerm && <span className="ml-1">para "{searchTerm}"</span>}
        </p>
      </div>

      {/* Grid de filmes */}
      {filteredMovies.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6">
          {filteredMovies.map((movie) => (
            <Card
              key={movie.imdbID}
              className="overflow-hidden hover:shadow-lg transition-shadow duration-300 py-0 pb-6"
            >
              <div className="aspect-[2/3] relative">
                <Image
                  src={movie.Poster || "/placeholder.svg"}
                  alt={movie.Title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                />
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-semibold line-clamp-2 min-h-[2.5rem]">
                  {movie.Title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground font-medium">
                    {movie.Year}
                  </span>
                  <Badge
                    variant="secondary"
                    className={`text-xs capitalize ${getTypeColor(movie.Type)}`}
                  >
                    {movie.Type}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="text-muted-foreground mb-4">
            <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p className="text-lg">Nenhum filme encontrado</p>
            <p className="text-sm">Tente buscar com um termo diferente</p>
          </div>
        </div>
      )}
    </div>
  );
}
