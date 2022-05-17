using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ManagementCarsAPI.Models.Entity
{
    public class Car
    {
        [MaxLength(50)]
        public string model { get; set; }
        [Key]
        [MaxLength(8)]
        public string number { get; set; }

        [MaxLength(20)]
        public string color { get; set; }

        [MaxLength(10)]
        public string? specialLetters { get; set; }

        public int year { get; set; }

        public int rentalCost { get; set; }

        public int generalCost { get; set; }


    }
}
