namespace ManagementCarsAPI.Models.DTO
{
    public interface addCar
    {
        public string model { get; set; }

        public string color { get; set; }

        public string? specialLetters { get; set; }

        public int year { get; set; }

        public int rentalCost { get; set; }


    }
}