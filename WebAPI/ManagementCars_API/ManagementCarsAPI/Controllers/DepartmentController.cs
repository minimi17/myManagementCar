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
    public class DepartmentController : ControllerBase
    {

        private readonly ManagementCarsContextDb _dbContext;

        public DepartmentController(ManagementCarsContextDb DepartmentContext)
        {
            _dbContext = DepartmentContext;
        }

        [HttpGet]
        [Route("{name}")]
        [ActionName("GetDepartmentAtName")]
        public async Task<IActionResult> GetDepartmentAtName(string name)
        {
            Department? department = await _dbContext.Departments.FirstOrDefaultAsync(department => department.name == name);
            if (department == null)
                return NotFound("Not Found Department With This Name ! ");
            return Ok(department);
        }

        [HttpGet]
        public async Task<IActionResult> GetDepartment()
        {
            List<Department>? departments = await _dbContext.Departments.ToListAsync();
            if (departments == null)
                return NotFound("Not have Department To Show ");
            return Ok(departments);
        }

        [HttpPost]
        public async Task<IActionResult> AddDepartment(Department newdepartment)
        {
            Department? department = await _dbContext.Departments.FindAsync(newdepartment.name);
            if (department != null)
                return BadRequest("have its");
            var PostDepartment = new Department()
            {
                name = newdepartment.name,
                description = newdepartment.description,
            };
            await _dbContext.Departments.AddAsync(PostDepartment);
            await _dbContext.SaveChangesAsync();
            return Ok(PostDepartment);
        }
        [HttpPut]
        public async Task<IActionResult> PutDepartment(Department AddDepartment)
        {
            Department? newDepartment = await _dbContext.Departments.FindAsync(AddDepartment.name);
            if (newDepartment == null)
                return NotFound("Not Found Department");
            newDepartment.name = AddDepartment.name;
            newDepartment.description = AddDepartment.description;
            await _dbContext.SaveChangesAsync();
            return Ok(newDepartment);


        }



        [HttpDelete]
        [Route("{name}")]
        [ActionName("DeleteDepartmentAtName")]
        public async Task<IActionResult> DeleteDepartmentAtName(string name)
        {
            var DepartmentController = await _dbContext.Departments.FindAsync(name);
            if (DepartmentController == null)
                return NotFound("Not Name Good");
            Worker? worker = await _dbContext.Workers.FirstOrDefaultAsync(workerTable => workerTable.role == name);
            if (worker != null)
                return BadRequest("this name its in Workers and you cant delete");

            _dbContext.Remove(DepartmentController);
            await _dbContext.SaveChangesAsync();
            return Ok(DepartmentController);
        }

    }
}
