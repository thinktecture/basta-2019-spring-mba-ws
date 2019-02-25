using Newtonsoft.Json;
using System;

namespace SessionFunctions
{
    /// <summary>
    /// Represents a Session
    /// </summary>
    public class Session
    {
        // We need JsonProperty to tell Cosmos DB to map this 
        // property to the internal cosmos db Id property
        [JsonProperty(PropertyName = "id")]
        public Guid Id { get; set; }

        public string Title { get; set; }

        public string Abstract { get; set; }

        public string Speaker { get; set; }
    }
}
