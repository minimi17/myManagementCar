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
    public class ClientController : ControllerBase
    {

        private readonly ManagementCarsContextDb _dbContext;

        public ClientController(ManagementCarsContextDb ClientContext)
        {
            _dbContext = ClientContext;
        }
        [HttpGet]
        public async Task<IActionResult> GetClients ()
        {
            List<Client>? clients = await _dbContext.Clients.ToListAsync();
            if (clients == null)
                return NotFound("Not have Digital Tools To Show :<");
            return Ok(clients);
        }

        [HttpGet]
        [Route("{id}")]
        public async Task<IActionResult> checkUser(string id)
        {
            Client? user = await _dbContext.Clients.FirstOrDefaultAsync(client => client.id == id);
            if (user == null)
                return NotFound("Not Found Client With This Id! ");
            return Ok(user);
        }

        [HttpPut]
        [Route("{idClientUpdate}")]
        public async Task<IActionResult> UpdateClient([FromRoute] string idClientUpdate , Client UpClient)
        {
            Client? exsitClient = await _dbContext.Clients.FindAsync(idClientUpdate);
            if (exsitClient == null)
                return NotFound("Not Found id");
            if (UpClient.carNumber != "" && UpClient.carNumber != null)
            {
                Car? car = await _dbContext.Cars.FindAsync(UpClient.carNumber);
                if (car == null)
                {
                    return NotFound("Not Found Car");
                }

                Client? exsitClient2 = await _dbContext.Clients.FirstOrDefaultAsync(clientTable => clientTable.carNumber == UpClient.carNumber);
                if (exsitClient2 != null)
                {
                    return BadRequest("This Car Is in use");
                }
            }
           
            exsitClient.firstName = UpClient.firstName;
            exsitClient.lastName = UpClient.lastName;
            exsitClient.bornDate = UpClient.bornDate;
            exsitClient.phoneNumber = UpClient.phoneNumber;
            exsitClient.VIP = UpClient.VIP;        
            exsitClient.carNumber = UpClient.carNumber;

            await _dbContext.SaveChangesAsync();
            return Ok(exsitClient);
        }

        [HttpPost]
        public async Task<IActionResult> AddUser(addClient client)
        {

            Client? client1 = await _dbContext.Clients.FindAsync(client.id);
            if (client1 != null)
                return BadRequest("have its");

            Client? client2 = new Client()
            {
                firstName = client.firstName,
                lastName = client.lastName,
                bornDate = client.bornDate,
                phoneNumber = client.phoneNumber,
                id=client.id,
                VIP= client.vip,
                carNumber = null
            };
            await _dbContext.Clients.AddAsync(client2);
            await _dbContext.SaveChangesAsync();
            return Ok(client2);
        }


        [HttpPut]
        [Route("addCar/{idClientUpdate}")]
        public async Task<IActionResult> AddUserCar(string idClientUpdate, addCarToClient client)
        {
            Client? client1 = await _dbContext.Clients.FindAsync(client.idClient);
            if (client1 == null)
                return BadRequest("not found");
            Car? car1 = await _dbContext.Cars.FindAsync(client.numberCar);
            if (car1 == null)
                return BadRequest("not found car");
            Client? client2 = await _dbContext.Clients.FirstOrDefaultAsync(clientTable=>clientTable.carNumber == client.numberCar);
            if (client2 != null)
                return BadRequest("In use");
            client1.carNumber = client.numberCar;
            await _dbContext.SaveChangesAsync();
            return Ok(client2);
        }




            [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> DeleteClient(string id)
        {
            var currentClient = await _dbContext.Clients.FindAsync(id);
            if (currentClient == null)
                return NotFound("Not Id Good");
            _dbContext.Remove(currentClient);
            await _dbContext.SaveChangesAsync();
            return Ok(currentClient);
        }

    }
}
