using FuncionariosAPI.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FuncionariosAPI.Controllers

{
    [Route("api/[controller]")]
    [ApiController]
    public class FuncionariosController : ControllerBase
    {
        private readonly DataContext _context;
        public FuncionariosController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        
        public async Task<ActionResult<List<Funcionarios>>> GetFuncionarios()
        {

            try
            {
                return Ok(await _context.Funcionarios.ToListAsync());
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        [HttpPost]

        public async Task<ActionResult<List<Funcionarios>>> CreateFuncionario(Funcionarios funcionario)
        {
            _context.Funcionarios.Add(funcionario);
            await _context.SaveChangesAsync();

            return Ok(await _context.Funcionarios.ToListAsync());
        }

        [HttpPut]

        public async Task<ActionResult<List<Funcionarios>>> UpdateFuncionario(Funcionarios funcionario)
        {
            var dbFuncionario = await _context.Funcionarios.FindAsync(funcionario.Id);
            if (dbFuncionario == null)
                return BadRequest("Funcionário não encontrado!");

            dbFuncionario.Name = funcionario.Name;
            dbFuncionario.Place = funcionario.Place;
            dbFuncionario.Period = funcionario.Period;

            await _context.SaveChangesAsync();

            

            return Ok(dbFuncionario);
        }

        [HttpDelete("{id}")]

        public async Task<ActionResult<List<Funcionarios>>> DeleteFuncionario(int id)
        {
            var dbFuncionario = await _context.Funcionarios.FindAsync(id);
            if (dbFuncionario == null)
                return BadRequest("Funcionário não encontrado!");

            _context.Funcionarios.Remove(dbFuncionario);

            await _context.SaveChangesAsync();

            return Ok(await _context.Funcionarios.ToListAsync());
        }

    }
}
