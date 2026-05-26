using Filmes.WebAPI.DTO;
using Filmes.WebAPI.Interfaces;
using Filmes.WebAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;

namespace Filmes.WebAPI.Controllers;

[Route("api/[controller]")]
[ApiController]
public class LoginController : ControllerBase
{
    private readonly IUsuarioRepository _usuarioRepository;

    public LoginController(IUsuarioRepository usuarioRepository)
    {
        _usuarioRepository = usuarioRepository;
    }

    [HttpPost]
    public IActionResult Login(LoginDTO loginDTO)
    {
        try
        {
            Usuario usuarioBuscado = _usuarioRepository.BuscarPorEmailESenha(loginDTO.Email!, loginDTO.Senha!);

            if (usuarioBuscado == null)
            {
                return NotFound(new { mensagem = "Email ou senha inválidos!" });
            }

            //Caso encontre o usuario, prosseguir para a criação do token 

            //1 Definir as informações(Claims) que serão fornecido no token(Payload)
            var claims = new[]
            {
                //formato da cliam
                new Claim(JwtRegisteredClaimNames.Jti, usuarioBuscado.IdUsuario),

                new Claim(JwtRegisteredClaimNames.Email, usuarioBuscado.IdUsuario),

                //existe a possibilidade de criar uma claim personalizada
                new Claim("Claim Personalizada", "Valor da Claim personalizada")
            };

            //2 Definir a chave de acesso ao token do token (HEADER )
            var key = new SymmetricSecurityKey
                (System.Text.Encoding.UTF8.GetBytes("filmes-chaves-autenticacao-webapi-dev"));

            //3 Definir as credenciais
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
            
            //4 - Gerar token
            var token = new JwtSecurityToken
            (
                issuer: "Filmes.WebAPI", //Emissor do token
                audience: "Filmes.WebAPI", //Destinatário do token
                claims: claims, //Dados definidos nas claims
                expires: DateTime.Now.AddMinutes(5), //Tempo de expiração do token
                signingCredentials: creds //Credenciais do token
            );

            //5 - Retornar o token criado
            return Ok(new
            {
                token = new JwtSecurityTokenHandler().WriteToken(token)
            });
        }
        catch (Exception error)
        {

            return BadRequest(error.Message);
        }
    }
}
