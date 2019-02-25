using DataAccess;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SessionFunctions
{
    public static class GetSessionFunctions
    {
        /// <summary>
        /// Function to retrieve all sessions
        /// </summary>
        /// <param name="req"></param>
        /// <param name="sessions"></param>
        /// <returns></returns>
        [FunctionName("GetSession")]
        public static async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = "sessions")] HttpRequest req,
            [CosmosDB(databaseName: "MBAWorkshop2019", collectionName: "Sessions",
                ConnectionStringSetting = "CosmosDbConnection")] IEnumerable<Session> sessions)
        {
            return new OkObjectResult(sessions.Select(s => new { s.Id, s.Title }));
        }
    }
}
