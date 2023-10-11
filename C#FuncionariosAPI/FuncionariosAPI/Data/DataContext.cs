using Microsoft.EntityFrameworkCore;

namespace FuncionariosAPI.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options): base(options) { }

        public DbSet<Funcionarios> Funcionarios => Set<Funcionarios>();
    }
}
