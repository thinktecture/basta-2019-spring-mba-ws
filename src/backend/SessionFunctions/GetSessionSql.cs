using DataAccess;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using System.Linq;
using System.Threading.Tasks;

namespace SessionFunctions
{
    public class GetSessionSqlFunctions
    {
        private readonly ISessionRepository _repository;

        public GetSessionSqlFunctions(ISessionRepository repository)
        {
            _repository = repository;
        }

        [FunctionName("GetSessionSql")]
        public async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = "sessionssql")] HttpRequest req)
        {
            return new OkObjectResult(_repository.GetAll().Select(s => new { s.Id, s.Title }));
        }
    }
}
