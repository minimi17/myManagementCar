using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

using ManagementCarsAPI.Data.Context;
using Microsoft.EntityFrameworkCore;
using ManagementCarsAPI.Models.Entity;
using ManagementCarsAPI.Models.DTO;

namespace ManagementCarsAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CarController : ControllerBase
    {

        private readonly ManagementCarsContextDb _dbContext;

        public CarController(ManagementCarsContextDb CarContext)
        {
            _dbContext = CarContext;
        }


        [HttpGet]
        [Route("{number}")]
        [ActionName("GetCarAtNumber")]
        public async Task<IActionResult> GetCarByNumber(string number)
        {
            Car? car = await _dbContext.Cars.FirstOrDefaultAsync(car => car.number == number);
            if (car == null)
                return NotFound("Not Found Car With This Number ! ");
            return Ok(car);
        }

        [HttpGet]
        public async Task<IActionResult> GetCars()
        {
            List<Car> cars = await _dbContext.Cars.ToListAsync();
            if (cars == null)
                return NotFound("Not have Car To Show :< ");
            return Ok(cars);
        }

        [HttpPost]
        public async Task<IActionResult> AddCar(Car Newcar)
        {
            Car? Car = await _dbContext.Cars.FindAsync(Newcar.number);
            if (Car != null)
                return BadRequest("have its");
            var car = new Car()
            {
                number = Newcar.number,
                color = Newcar.color,
                generalCost = Newcar.generalCost,
                model = Newcar.model,
                rentalCost = Newcar.rentalCost,
                specialLetters = Newcar.specialLetters,
                year = Newcar.year,
            };
            await _dbContext.Cars.AddAsync(car);
            await _dbContext.SaveChangesAsync();
            return Ok(car);     
        }

        [HttpDelete]
        [Route("{number}")]
        [ActionName("GetCarAtNumber")]
        public async Task<IActionResult> DeleteDepartmentAtName(string number)
        {
            var CarController = await _dbContext.Cars.FindAsync(number);
            if (CarController == null)
                return NotFound("Not number Good");
            Client? client = await _dbContext.Clients.FirstOrDefaultAsync(clientTable => clientTable.carNumber == number);
            if (client != null)
                return BadRequest("This Car its in use");
            CarAndDigitalTools? carAndDigitalTools = await _dbContext.CarAndDigitalTools.FirstOrDefaultAsync(carDigital => carDigital.numberCar == number);
            if (carAndDigitalTools != null)
                return BadRequest("This car have digital tools");
            _dbContext.Remove(CarController);
            await _dbContext.SaveChangesAsync();
            return Ok(CarController);
        }

        [HttpPut]
        [Route("{number}")]
        public async Task<IActionResult> UpdateCar([FromRoute] string number, Car UpCar)
        {
            Car? exsitCar = await _dbContext.Cars.FindAsync(number);
            if (exsitCar == null)
                return NotFound("Not Found car");

            exsitCar.model = UpCar.model;
            exsitCar.rentalCost = UpCar.rentalCost;
            exsitCar.year = UpCar.year;
            exsitCar.color = UpCar.color;
            exsitCar.specialLetters = UpCar.specialLetters;


            await _dbContext.SaveChangesAsync();
            return Ok(exsitCar);
        }

    }
}
