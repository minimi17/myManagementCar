using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ManagementCarsAPI.Models.Entity
{
    public class CarAndDigitalTools
    {
        [MaxLength(8)]
        public string numberCar { get; set; }

        public int idDigitalTools { get; set; }

    }
}
