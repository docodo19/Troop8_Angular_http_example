using System.Collections.Generic;
using Day8_http.Models;

namespace Day8_http.Services
{
    public interface IGenreService
    {
        Genre FindGenre(int id);
        IList<Genre> ListGenres();
    }
}
