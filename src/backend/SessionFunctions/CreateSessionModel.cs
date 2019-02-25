namespace SessionFunctions
{
    /// <summary>
    /// Represents an input model for creating a session
    /// </summary>
    public class CreateSessionModel
    {
        public string Title { get; set; }
        public string Abstract { get; set; }
        public string Speaker { get; set; }
    }
}