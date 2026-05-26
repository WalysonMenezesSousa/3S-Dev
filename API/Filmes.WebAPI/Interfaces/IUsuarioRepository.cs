using Filmes.WebAPI.Models;

namespace Filmes.WebAPI.Interfaces;

public interface IUsuarioRepository
{
    void Cadastrar(Usuario novoUsuario);
    Usuario BuscarPorEmailESenha(string email, string senha);
    Usuario BuscarPorId(Guid id);
}
