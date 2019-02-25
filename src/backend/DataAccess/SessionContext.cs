using Microsoft.EntityFrameworkCore;

namespace DataAccess
{
    public class SessionContext : DbContext
    {
        protected SessionContext() : base()
        {
        }

        public SessionContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Session> Sessions { get; set; }
    }
}
