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

    public class DigitalToolsController : ControllerBase
    {
        private readonly ManagementCarsContextDb _dbContext;

        public DigitalToolsController(ManagementCarsContextDb DigitalToolsContext)
        {
            _dbContext = DigitalToolsContext;
        }

        [HttpGet]
        [Route("{id:int}")]
        [ActionName("GetDigitalToolsAtId")]
        public async Task<IActionResult> GetDigitalToolsAtId(int id)
        {
            DigitalTools? digitalTools = await _dbContext.DigitalTools.FirstOrDefaultAsync(digitalTools => digitalTools.Id == id);
            if (digitalTools == null)
                return NotFound("Not Found Digital Tools With This Id ! ");
            return Ok(digitalTools);
        }

        [HttpGet]
        public async Task<IActionResult> GetDigitalTools()
        {
            List<DigitalTools>? digitalTools = await _dbContext.DigitalTools.ToListAsync();
            if (digitalTools == null)
                return NotFound("Not have Digital Tools To Show :<");
            return Ok(digitalTools);

        }

        [HttpPut]
        [Route("{idDigitalUpdate:int}")]
        public async Task<IActionResult> PutDigitalTools([FromRoute] int idDigitalUpdate, addDigitalTools newDigitalTools)
        {
            DigitalTools? digitalTools = await _dbContext.DigitalTools.FindAsync(idDigitalUpdate);
            if (digitalTools == null)
                return BadRequest("Not found id digital tools");
            digitalTools.price = newDigitalTools.price;
            digitalTools.name = newDigitalTools.name;
            await _dbContext.SaveChangesAsync();
            return Ok(digitalTools);
        }


        [HttpPost]
        public async Task<IActionResult> addDigitalTools (addDigitalTools newdigitalTools)
        {
            var digitaltools = new DigitalTools()
            {  
                name = newdigitalTools.name,
                price = newdigitalTools.price,
            };
            await _dbContext.DigitalTools.AddAsync(digitaltools);
            await _dbContext.SaveChangesAsync();
            return Ok(digitaltools);
        }


        [HttpDelete]
        [Route("{id:int}")]
        [ActionName("DeleteDigitalToolsAtId")]
        public async Task<IActionResult> DeleteDigitalToolsAtId(int id)
        {
            DigitalTools? DigitalToolss = await _dbContext.DigitalTools.FindAsync(id);
            if (DigitalToolss == null)
                return NotFound("Not Id Good");
            CarAndDigitalTools? CarAndDigitalToolss = await _dbContext.CarAndDigitalTools.FirstOrDefaultAsync(digitalToolsTable=>digitalToolsTable.idDigitalTools == id);
            if (CarAndDigitalToolss != null)
                return BadRequest("this id its in carAndDigitaltols and you cant delete");
            _dbContext.Remove(DigitalToolss);
            await _dbContext.SaveChangesAsync();
            return Ok(DigitalToolss);
        }
    }
}
