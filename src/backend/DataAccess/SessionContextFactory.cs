using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace DataAccess
{

    public class SessionContextFactory : IDesignTimeDbContextFactory<SessionContext>
    {
        public SessionContext CreateDbContext(string[] args)
        {
            var optionsBuilder = new DbContextOptionsBuilder<SessionContext>();
            optionsBuilder.UseSqlServer("");
            return new SessionContext(optionsBuilder.Options);
        }
    }
}
