using Microsoft.ApplicationInsights;
using Microsoft.ApplicationInsights.DataContracts;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.Extensions.Logging;
using System.Threading.Tasks;

namespace SessionFunctions
{
    public static class GetSessionById
    {
        [FunctionName("GetSessionById")]
        public static async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = "sessions/{id}")] HttpRequest req,
            [CosmosDB(databaseName: "MBAWorkshop2019", collectionName: "Sessions",
                ConnectionStringSetting = "CosmosDbConnection", Id = "{id}", PartitionKey = "{id}")]
                Session session,
            ILogger log)
        {
            var client = new TelemetryClient();
            client.TrackEvent(new EventTelemetry() { Name = "Session Detail Request" });

            if (session == null)
            {
                return new NotFoundResult();
            }
            return new OkObjectResult(session);
        }
    }
}
