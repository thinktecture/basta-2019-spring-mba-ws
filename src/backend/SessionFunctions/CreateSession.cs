using DataAccess;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using System;

namespace SessionFunctions
{
    public static class CreateSession
    {
        /// <summary>
        /// Function to create a session.
        /// </summary>
        /// <param name="model"></param>
        /// <param name="session"></param>
        /// <returns></returns>
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
