using LuftbornTask.Application.ViewModels;

namespace LuftbornTask.Application.Interfaces
{
    public interface IProductService
    {
        Task<IList<ProductViewModel>> GetAllProductsAsync();
        Task<ProductViewModel> GetProductByIdAsync(int id);
        Task AddProductAsync(ProductViewModel productVm);
        Task UpdateProductAsync(int id, ProductViewModel productVm);
        Task DeleteProductAsync(int id);
    }
}
