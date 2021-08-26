namespace Application.File.Saver
{
    public class FileSaver : IFileSaver
    {
        //public async Task<IActionResult> OnPostUploadAsync(IFormFile files)
        //{
        //    if (files != null)
        //    {
        //        var filePath = Path.GetTempFileName();

        //        using (var stream = System.IO.File.Create(filePath))
        //        {
        //            await files.CopyToAsync(stream);
        //        }
        //    }
        //    return Ok();
        //}
        public string Save(File file)
        {
            if (file != null)
            {
                //var filePath = Path.GetTempFileName();

                //using (var stream = System.IO.File.Create(filePath))
                //{
                //    await file.CopyToAsync(stream);
                //}
                //return "Yes";



                //// путь к папке Files
                //string path = "/assets/" + file.Name;
                //// сохраняем файл в папку Files в каталоге wwwroot
                //using (var fileStream = new FileStream(_appEnvironment.WebRootPath + path, FileMode.Create))
                //{
                //    await uploadedFile.CopyToAsync(fileStream);
                //}
                //FileModel newfile = new FileModel { Name = file.FileName, Path = path };
                //_context.Files.Add(newfile);
                //_context.SaveChanges();
            }
            return "No";
        }
    }
}
