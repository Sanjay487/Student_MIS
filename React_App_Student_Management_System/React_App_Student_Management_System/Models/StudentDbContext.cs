using Microsoft.EntityFrameworkCore;

namespace React_App_Student_Management_System.Models
{
    public class StudentDbContext : DbContext
    {
        public StudentDbContext(DbContextOptions<StudentDbContext> options) : base(options)
        {

        }


        public DbSet<Student> Student { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Data Source=LAPTOP-JDP6JL07\\SQLEXPRESS01;Initial Catalog=Student;Integrated Security=True");
        }
    }
}
