using System.Collections.Generic;
using Day8_http.Models;

namespace Day8_http.Services
{
    public interface IGuestbookService
    {
        IList<GuestbookEntry> ListEntries();
        void SaveEntry(GuestbookEntry entry);
    }
}
