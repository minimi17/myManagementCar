using ManagementCarsAPI.Models.Entity;
using Microsoft.EntityFrameworkCore;

namespace ManagementCarsAPI.Data.Context
{
    public class ManagementCarsContextDb : DbContext
    {
        public ManagementCarsContextDb(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Car> Cars { get; set; }
        public DbSet<CarAndDigitalTools> CarAndDigitalTools { get; set; }
        public DbSet<Client> Clients { get; set; }
        public DbSet<Department> Departments { get; set; }
        public DbSet<DigitalTools> DigitalTools { get; set; }
        public DbSet<Worker> Workers { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Car>().ToTable("Car");
            modelBuilder.Entity<CarAndDigitalTools>().HasKey(keys=>new
            {
                keys.numberCar,
                keys.idDigitalTools
            });
            modelBuilder.Entity<CarAndDigitalTools>().ToTable("CarAndDigitalTools");
            modelBuilder.Entity<Client>().ToTable("Client");
            modelBuilder.Entity<Department>().ToTable("Department");
            modelBuilder.Entity<DigitalTools>().ToTable("DigitalTools");
            modelBuilder.Entity<Worker>().ToTable("Worker");
        }
    }
}
