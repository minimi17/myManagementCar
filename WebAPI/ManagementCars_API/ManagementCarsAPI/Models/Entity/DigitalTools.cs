using System.ComponentModel.DataAnnotations;

namespace ManagementCarsAPI.Models.Entity
{
    public class DigitalTools
    {
        [Key]
        public int Id { get; set; }

        [MaxLength(20)]
        public string name { get; set; }

        public int price { get; set; }
    }
}
