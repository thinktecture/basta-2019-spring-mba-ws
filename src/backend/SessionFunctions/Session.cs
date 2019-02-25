using Newtonsoft.Json;
using System;

namespace SessionFunctions
{

    public class Session
    {
        [JsonProperty(PropertyName = "id")]
        public Guid Id { get; set; }

        public string Title { get; set; }

        public string Abstract { get; set; }

        public string Speaker { get; set; }
    }
}
