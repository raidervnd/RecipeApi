using Application.Abstraction;
using Application.File;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using RecipesApi.Dto;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace RecipesApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FileController : ControllerBase
    {

        private readonly IFileService _fileService;
        private readonly IUnitOfWork _unitOfWork;

        public FileController(
            IFileService fileService,
            IUnitOfWork unitOfWork)
        {
            _fileService = fileService;
            _unitOfWork = unitOfWork;
        }

        [HttpGet("{id}")]
        public string GetFileUrl(int id)
        {
            return "value";
        }

        [HttpPost]
        [Route("")]
        public async Task<IActionResult> SaveFile([FromBody] IFormFile files)
        {
            if (files != null)
            {
                var filePath = Path.GetTempFileName();

                using (var stream = System.IO.File.Create(filePath))
                {
                    await files.CopyToAsync(stream);
                }
            }
            return Ok( "yes");
        }
        //public void SaveFile(File filedto)
        //{
        //    _fileService.SaveFile(filedto);
        //    _unitOfWork.Commit();
        //}
    }
}
