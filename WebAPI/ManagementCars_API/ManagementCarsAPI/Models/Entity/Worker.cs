using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ManagementCarsAPI.Models.Entity
{
    public class Worker
    {

        [MaxLength(20)]
        public string firstName { get; set; }

        [MaxLength(20)]
        public string lastName { get; set; }

        [Key]
        [MaxLength(20)]
        public string id { get; set; }

        [ForeignKey("FK_Worker_Department")]
        [MaxLength(20)]
        public string role { get; set; }

        public int salary { get; set; }

        [DataType(DataType.Date)]
        public DateTime joinIn { get; set; }

        [MaxLength(10)]
        public string password { get; set; }



    }
}
