using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ManagementCarsAPI.Models.Entity
{
    [Index(nameof(carNumber), IsUnique = true)]
    public class Client
    {

        [MaxLength(20)]
        public string firstName { get; set; }
        
        [MaxLength(20)]
        public string lastName { get; set; }

        [Key]
        [StringLength(9)]
        public string id { get; set; }

        [DataType(DataType.Date)]
        public DateTime? bornDate { get; set; }

        [StringLength(10)]
        public string phoneNumber{ get; set; }

        public bool VIP { get; set; }

        [StringLength(8)]
        [ForeignKey("FK_Client_Car")]
        public string? carNumber { get; set; }

    }
}
