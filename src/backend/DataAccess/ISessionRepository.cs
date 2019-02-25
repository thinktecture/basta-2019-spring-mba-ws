using System.Collections.Generic;

namespace DataAccess
{
    public interface ISessionRepository
    {
        IEnumerable<Session> GetAll();
    }
}
