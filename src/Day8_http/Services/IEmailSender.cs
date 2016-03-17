using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Day8_http.Services
{
    public interface IEmailSender
    {
        Task SendEmailAsync(string email, string subject, string message);
    }
}
