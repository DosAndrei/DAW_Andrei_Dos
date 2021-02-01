
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace NotesService.Models
{
    public enum NoteStatus
    {
        ToDo,
        InProgress,
        Done
    }

    public class Note
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }

        public NoteStatus Status { get; set; }

        public Note()
        {

        }

        public Note(string id, string title, string description, NoteStatus status = NoteStatus.ToDo)
        {
            Id = id;
            Title = title;
            Description = description;
            Status = status;
        }

        public Note(Note note)
        {
            Id = note.Id;
            Title = note.Title;
            Description = note.Description;
            Status = note.Status;
        }
    }
}
