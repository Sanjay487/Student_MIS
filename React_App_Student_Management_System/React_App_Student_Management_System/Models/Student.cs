using System.ComponentModel.DataAnnotations;

namespace React_App_Student_Management_System.Models
{
    public class Student
    {
        [Key]
        public int Id { get; set; }
        public string StudentName { get; set; }        
    
        public string StudentEmail { get; set;}

        public string StudentPhoneNumber { get; set; }

        public string Course { get; set; }

       
    }
}
