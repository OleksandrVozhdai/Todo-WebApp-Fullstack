﻿namespace todoAPI.Models
{
	public class TodoModel
	{
		public int Id { get; set; }
		public string? Title { get; set; }
		public string? Description { get; set; }
		public bool IsCompleted { get; set; }
		public int UserId { get; set; }
	}
}
