using Microsoft.Azure.WebJobs;
using Microsoft.Extensions.Logging;
using System;

namespace SessionFunctions
{
    public static class KeepItRunning
    {
        /// <summary>
        /// Function that run every minute so the function application will not be shutdown after idle time.
        /// </summary>
        /// <param name="myTimer"></param>
        /// <param name="log"></param>
        [FunctionName("KeepItRunning")]
        public static void Run([TimerTrigger("0 */1 * * * *")]TimerInfo myTimer, ILogger log)
        {
            log.LogInformation($"C# Timer trigger function executed at: {DateTime.Now}");
        }
    }
}
