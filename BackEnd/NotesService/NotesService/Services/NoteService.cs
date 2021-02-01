using MongoDB.Driver;
using NotesService.Collections;
using NotesService.Models;
using System.Collections.Generic;

namespace NotesService.Services
{
    public class NoteService
    {
        private readonly IMongoCollection<Note> notesCollection;

        public NoteService(IDatabaseSettings databaseSettings)
        {
            var client = new MongoClient(databaseSettings.ConnectionString);
            var database = client.GetDatabase(databaseSettings.DatabaseName);
            notesCollection = database.GetCollection<Note>("Note");
        }

        public Note Create(Note note)
        {
            notesCollection.InsertOne(note);
            return FindOne(note.Id);
        }

        public IList<Note> ReadAll()
        {
            return notesCollection.Find(note => true).ToList();
        }

        public Note FindOne(string id)
        {
            return notesCollection.Find(note => note.Id == id).FirstOrDefault();
        }

        public bool Update(Note noteToUpdate)
        {
            var result = notesCollection.ReplaceOne(note => note.Id == noteToUpdate.Id, noteToUpdate);
            return result.ModifiedCount != 0;
        }

        public bool Delete(string id)
        {
            var result = notesCollection.DeleteOne(note => note.Id == id);
            return result.DeletedCount != 0;
        }
    }
}
