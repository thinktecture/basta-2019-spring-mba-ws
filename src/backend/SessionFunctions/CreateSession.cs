using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using System;

namespace SessionFunctions
{
    public static class CreateSession
    {
        [FunctionName("CreateSession")]
        public static IActionResult Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "post", Route = "sessions")] CreateSessionModel model,
            [CosmosDB(databaseName: "MBAWorkshop2019", collectionName: "Sessions",
                ConnectionStringSetting = "CosmosDbConnection")] out Session session)
        {
            session = new Session()
            {
                Id = Guid.NewGuid(),
                Abstract = model.Abstract,
                Speaker = model.Speaker,
                Title = model.Title
            };

            return new CreatedResult("sessions", session.Id);
        }
    }
}
