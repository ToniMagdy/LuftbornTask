using LuftbornTask.Application.Interfaces;
using LuftbornTask.Application.ViewModels;
using LuftbornTask.Domain.Entities;
using LuftbornTask.Domain.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LuftbornTask.Application.Services
{
    public class ProductService : IProductService
    {
        private readonly IProductRepository _productRepository;

        public ProductService(IProductRepository productRepository)
        {
            _productRepository = productRepository;
        }

        public async Task<IList<ProductViewModel>> GetAllProductsAsync()
        {
            var products = await _productRepository.GetAllAsync();
            return products.Select(p => new ProductViewModel
            {
                Id = p.Id,
                Name = p.Name,
                Description = p.Description,
                Price = p.Price
            }).ToList();
        }

        public async Task<ProductViewModel> GetProductByIdAsync(int id)
        {
            var product = await _productRepository.GetByIdAsync(id);
            if (product == null) return null;

            return new ProductViewModel
            {
                Id = product.Id,
                Name = product.Name,
                Description = product.Description,
                Price = product.Price
            };
        }

        public async Task AddProductAsync(ProductViewModel productVm)
        {
            var product = new Product
            {
                Name = productVm.Name,
                Description = productVm.Description,
                Price = productVm.Price
            };
            await _productRepository.AddAsync(product);
        }

        public async Task UpdateProductAsync(int id, ProductViewModel productVm)
        {
            var product = await _productRepository.GetByIdAsync(id);
            if (product == null) return;

            product.Name = productVm.Name;
            product.Description = productVm.Description;
            product.Price = productVm.Price;

            await _productRepository.UpdateAsync(product);
        }

        public async Task DeleteProductAsync(int id)
        {
            await _productRepository.DeleteAsync(id);
        }
    }
}
