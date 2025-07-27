using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using todoAPI.Models;

namespace todoAPI.Controllers
{
	[Route("api/List[controller]")]
	[ApiController]
	public class TodoController : ControllerBase
	{
		private readonly AppDbContext _context;

		public TodoController(AppDbContext context)
		{
			_context = context;
		}

		// GET: api/Todo
		[HttpGet]
		public async Task<ActionResult<IEnumerable<TodoModel>>> GetTodoSet()
		{
			return await _context.TodoSet.ToListAsync();
		}

		// GET: api/Todo/5
		[HttpGet("{id}")]
		public async Task<ActionResult<TodoModel>> GetTodoModel(int id)
		{
			var todoModel = await _context.TodoSet.FindAsync(id);

			if (todoModel == null)
			{
				return NotFound();
			}

			return todoModel;
		}

		// PUT: api/Todo/5
		// To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
		[HttpPut("{id}")]
		public async Task<IActionResult> PutTodoModel(int id, TodoModel todoModel)
		{
			if (id != todoModel.Id)
			{
				return BadRequest();
			}

			_context.Entry(todoModel).State = EntityState.Modified;

			try
			{
				await _context.SaveChangesAsync();
			}
			catch (DbUpdateConcurrencyException)
			{
				if (!TodoModelExists(id))
				{
					return NotFound();
				}
				else
				{
					throw;
				}
			}

			return NoContent();
		}

		// POST: api/Todo
		// To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
		[HttpPost]
		public async Task<ActionResult<TodoModel>> PostTodoModel(TodoModel todoModel)
		{
			_context.TodoSet.Add(todoModel);
			await _context.SaveChangesAsync();

			return CreatedAtAction("GetTodoModel", new { id = todoModel.Id }, todoModel);
		}

		// DELETE: api/Todo/5
		[HttpDelete("{id}")]
		public async Task<IActionResult> DeleteTodoModel(int id)
		{
			var todoModel = await _context.TodoSet.FindAsync(id);
			if (todoModel == null)
			{
				return NotFound();
			}

			_context.TodoSet.Remove(todoModel);
			await _context.SaveChangesAsync();

			return NoContent();
		}

		private bool TodoModelExists(int id)
		{
			return _context.TodoSet.Any(e => e.Id == id);
		}
	}
}
