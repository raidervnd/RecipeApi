using Application.File.Saver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.File
{
    public class FileService: IFileService
    {
        private readonly IFileRepository _fileRepository;
        private readonly IFileSaver _fileSaver;
        public FileService(IFileRepository fileRepository, IFileSaver fileSaver)
        {
            _fileRepository = fileRepository;
            _fileSaver = fileSaver;
        }

        public string GetFileUrl()
        {
            //_fileRepository.
            throw new NotImplementedException();
        }

        public void SaveFile(File file)
        {
            _fileSaver.Save(file);
        }
    }
}
