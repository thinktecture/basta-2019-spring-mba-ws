using System.Collections.Generic;

namespace DataAccess
{
    public class SessionRepository : ISessionRepository
    {
        private readonly SessionContext _context;

        public SessionRepository(SessionContext context)
        {
            _context = context;
        }

        public IEnumerable<Session> GetAll()
        {
            return _context.Sessions;
        }
    }
}
