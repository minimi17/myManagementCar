using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ManagementCarsAPI.Models.Entity
{
    public class Department
    {
        [Key]
        [MaxLength(20)]
        public string name { get; set; }

        [Column(TypeName = "ntext")]
        public string description { get; set; }
    }
}
