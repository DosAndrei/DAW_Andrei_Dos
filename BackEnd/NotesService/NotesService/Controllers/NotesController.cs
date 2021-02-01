using Microsoft.AspNetCore.Mvc;
using NotesService.Models;
using NotesService.Services;
using System;

namespace NotesService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NotesController : ControllerBase
    {
        private readonly NoteService noteService;

        public NotesController(NoteService _noteService)
        {
            noteService = _noteService;
        }

        [HttpGet]
        public ActionResult GetAll()
        {
            try
            {
                var result = noteService.ReadAll();
                return Ok(result);
            }catch(Exception)
            {
                return Problem("A possible connection error occured. Please try again later!");
            }
        }

        [HttpGet("{id}")]
        public ActionResult Find(string id)
        {
            try
            {
                var result = noteService.FindOne(id);
                return Ok(result);
            }
            catch (Exception)
            {
                return Problem("Server error or invalid data!");
            }
        }

        [HttpPost("create")]
        public ActionResult Create(Note noteToCreate)
        {
            try
            {
                var result = noteService.Create(noteToCreate);
                if (result != null)
                {
                    return Ok(result);
                }
                else
                {
                    return BadRequest();
                }
            }
            catch (Exception)
            {
                return Problem("Server error or invalid data!");
            }
        }

        [HttpDelete("remove/{id}")]
        public ActionResult Remove(string id)
        {
            try
            {
                var result = noteService.Delete(id);
                if (result)
                {
                    return Ok(id+ " removed!");
                }
                else
                {
                    return BadRequest("Object not found or could not be removed!");
                }
            }
            catch (Exception)
            {
                return Problem("Client or server error occured! Please check your input or try again later!");
            }
        }

        [HttpPut("update")]
        public ActionResult Update(Note noteToUpdate)
        {
            try
            {
                var result = noteService.Update(noteToUpdate);
                if (result)
                {
                    return Ok(noteToUpdate);
                }
                else
                {
                    return BadRequest("Object not found or could not be updated!");
                }
            }
            catch (Exception)
            {
                return Problem("Client or server error occured! Please check your input or try again later!");
            }
        }
    }
}
