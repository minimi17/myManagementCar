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
    public class CarAndDigitalToolsController : ControllerBase
    {
        private readonly ManagementCarsContextDb _dbContext;

        public CarAndDigitalToolsController(ManagementCarsContextDb CarAndDigitalToolsControllerContext)
        {
            _dbContext = CarAndDigitalToolsControllerContext;
        }


        [HttpGet]
        [Route("DigitalToolsToCar/{number}")]
        public async Task<IActionResult> getDigitalToolsToCar(string number)
        {
            List<CarAndDigitalTools>? carAndDigitalTools = await _dbContext.CarAndDigitalTools.Where(carAndDigitalTools =>
            carAndDigitalTools.numberCar == number).ToListAsync();
            if (carAndDigitalTools == null || carAndDigitalTools.Count == 0)
                return NotFound("Not Found Car with Digital Tools With This Number Car ! ");
            List<int> allDigitalTools = new List<int>();
            int totalPriceallDigitalTools = 0;
            foreach (CarAndDigitalTools carAndDigitalToolsItem in carAndDigitalTools)
            {
                allDigitalTools.Add(carAndDigitalToolsItem.idDigitalTools);
                DigitalTools? nowDigitalTools = await _dbContext.DigitalTools.FirstOrDefaultAsync(digitalTools => digitalTools.Id == carAndDigitalToolsItem.idDigitalTools);
                totalPriceallDigitalTools += nowDigitalTools!.price;
            }
            Car? car = await _dbContext.Cars.FirstOrDefaultAsync(carsTable => carsTable.number == number);
            if (car == null)
                return NotFound("not good");
            car.generalCost = car.rentalCost + totalPriceallDigitalTools;
            await _dbContext.SaveChangesAsync();
            return Ok(car.generalCost);
        }

        [HttpGet]
        [Route("{number}/{id:int}")]
        [ActionName("GetCarAndDigitalTools_AtNumberAndId")]
        public async Task<IActionResult> GetCarAndDigitalTools_AtNumberAndId(string number, int id)
        {
            CarAndDigitalTools? carAndDigitalTools =
                await _dbContext.CarAndDigitalTools.FirstOrDefaultAsync(carAndDigitalTools =>
                carAndDigitalTools.numberCar == number && carAndDigitalTools.idDigitalTools == id);
            if (carAndDigitalTools == null)
                return NotFound("Not Found Car with Digital Tools With This Number Car and Id Digital Tools ! ");
            return Ok(carAndDigitalTools);
        }



        [HttpGet]
        public async Task<IActionResult> GetCarAndDigitalToolsController()
        {
            List<CarAndDigitalTools>? CarAndDigitalTools = await _dbContext.CarAndDigitalTools.ToListAsync();
            if (CarAndDigitalTools == null)
                return NotFound("Not have Car With DigitalTools To Show :<  ");
            return Ok(CarAndDigitalTools);
        }





        [HttpDelete]
        [Route("{number}/{id:int}")]
        [ActionName("GetCarAndDigitalTools_AtNumberAndId")]
        public async Task<IActionResult> DeletCarAndDigitalTools(string number, int id)
        {
            var CarAndDigitalTools = await _dbContext.CarAndDigitalTools.FindAsync(number, id);
            if (CarAndDigitalTools == null)
                return NotFound("Not Good");
            _dbContext.Remove(CarAndDigitalTools);
            await _dbContext.SaveChangesAsync();
            return Ok(CarAndDigitalTools);
        }

        [HttpPost]
        public async Task<IActionResult> AddCarWithDigitalToolss(AddCarWithDigitalTools addCarWithDigitalTools)
        {
            CarAndDigitalTools? carAndDigitalTools = await _dbContext.CarAndDigitalTools.FindAsync(addCarWithDigitalTools.numberCar, addCarWithDigitalTools.idDigitTools);
            if (carAndDigitalTools != null)
                return BadRequest("have its");

            Car? car = await _dbContext.Cars.FindAsync(addCarWithDigitalTools.numberCar);
            if (car == null)
                return NotFound("Not car");

            DigitalTools? digitalTools = await _dbContext.DigitalTools.FindAsync(addCarWithDigitalTools.idDigitTools);
            if (digitalTools == null)
                return NotFound("Not Digital Tools");


            CarAndDigitalTools carAndDigitalTools1 = new CarAndDigitalTools()
            {
                numberCar = addCarWithDigitalTools.numberCar,
                idDigitalTools = addCarWithDigitalTools.idDigitTools
            };
            await _dbContext.CarAndDigitalTools.AddAsync(carAndDigitalTools1);
            await _dbContext.SaveChangesAsync();
            return Ok(carAndDigitalTools1);
        }
    }
}

