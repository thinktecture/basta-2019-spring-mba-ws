using DataAccess;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using SessionFunctions;
using System;

[assembly: WebJobsStartup(typeof(StartUp))]
namespace SessionFunctions
{
    /// <summary>
    /// This represents the startup entity for Azure Functions.
    /// </summary>
    public class StartUp : IWebJobsStartup
    {
        private readonly string _connectionString = "";

        /// <inheritdoc />
        public void Configure(IWebJobsBuilder builder)
        {
            if (String.IsNullOrWhiteSpace(_connectionString))
            {
                return;
            }

            builder.Services.AddDbContext<SessionContext>(options =>
                options.UseSqlServer(_connectionString, b =>
                    b.MigrationsAssembly(typeof(SessionContext).Assembly.FullName))
            );

            builder.Services.AddScoped<ISessionRepository, SessionRepository>();

            using (var context = new SessionContextFactory().CreateDbContext(null))
            {
                context.Database.Migrate();
            }
        }
    }
}