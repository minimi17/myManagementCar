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
    public class WorkerController : ControllerBase
    {
        private readonly ManagementCarsContextDb _dbContext;

        public WorkerController(ManagementCarsContextDb WorkerControllerContext)
        {
            _dbContext = WorkerControllerContext;
        }

        [HttpGet]
        [Route("{id}")]
        [ActionName("GetWorkerAtID")]
        public async Task<IActionResult> GetWorkerAtID(string id)
        {
            Worker? worker = await _dbContext.Workers.FirstOrDefaultAsync(worker => worker.id == id);
            if (worker == null)
                return NotFound("Not Found Worker With This Id ! ");
            return Ok(worker);
        }



        [HttpGet]
        public async Task<IActionResult> GetWorkers()
        {
            List<Worker> workers = await _dbContext.Workers.ToListAsync();
            if (workers == null)
                return NotFound("Not have Worker To Show :< ");
            return Ok(workers);
        }
        [HttpPost]
        public async Task<IActionResult> PostWorker(Worker Newworker)
        {
            Worker? worker1 = await _dbContext.Workers.FindAsync(Newworker.id);
            if (worker1 != null)
                return BadRequest("have its");
            var worker = new Worker()
            {
                firstName = Newworker.firstName,
                lastName = Newworker.lastName,
                id = Newworker.id,
                joinIn = Newworker.joinIn,
                password = Newworker.password,
                role = Newworker.role,
                salary = Newworker.salary,
            };
            await _dbContext.Workers.AddAsync(worker);
            await _dbContext.SaveChangesAsync();
            return Ok(worker);
        }
        [HttpPut]
        [Route ("{idWorkerUpdate}")]
        public async Task<IActionResult> PutWorker([FromRoute]string idWorkerUpdate, addWorker  worker)
        {
            Worker? exsitworker = await _dbContext.Workers.FindAsync(idWorkerUpdate);
            if (exsitworker == null)
                return NotFound("Not found id worker");
            exsitworker.firstName = worker.firstName;
            exsitworker.lastName = worker.lastName;
            exsitworker.joinIn = worker.joinIn;
            exsitworker.password = worker.password;
            exsitworker.role = worker.role;
            exsitworker.salary = worker.salary;
            await _dbContext.SaveChangesAsync();
            return Ok(exsitworker);
          

        }



        [HttpDelete]
        [Route("{id}")]
        [ActionName("DeleteWorkerAtID")]
        public async Task<IActionResult> DeleteWorkerAtID(string id)
        {
           var WorkerController = await _dbContext.Workers.FindAsync(id);
            if (WorkerController == null)
                return NotFound("Not Id Good");
            _dbContext.Remove(WorkerController);
            await _dbContext.SaveChangesAsync();
            return Ok(WorkerController);
        }


        [HttpPut]
        
        public async Task<IActionResult>checkWorker(workerLogin worker)
        {
            Worker? workerRegistered = await _dbContext.Workers.FirstOrDefaultAsync(workerTable=>workerTable.id == worker.id  && workerTable.password == worker.password);
            if (workerRegistered == null)
                return NotFound("Not found this worker");
            return Ok(workerRegistered);
        }
    }
}
