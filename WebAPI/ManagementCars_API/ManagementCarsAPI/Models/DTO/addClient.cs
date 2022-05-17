namespace ManagementCarsAPI.Models.DTO
{
    public class addClient
    {
        public string firstName { get; set; }
        public string lastName { get; set; }
        public string id { get; set; }
        public DateTime? bornDate { get; set; }
        public string phoneNumber { get; set; }
        public bool vip { get; set; }

    }
}
