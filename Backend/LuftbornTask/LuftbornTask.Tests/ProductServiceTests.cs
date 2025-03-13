using LuftbornTask.Application.Interfaces;
using LuftbornTask.Application.Services;
using LuftbornTask.Domain.Entities;
using LuftbornTask.Domain.Interfaces;
using Moq;

namespace LuftbornTask.Tests
{
    public class ProductServiceTests
    {
        private readonly Mock<IProductRepository> _productRepositoryMock;
        private readonly IProductService _productService;

        public ProductServiceTests()
        {
            _productRepositoryMock = new Mock<IProductRepository>();
            _productService = new ProductService(_productRepositoryMock.Object);
        }

        [Fact]
        public async Task GetAllProductsAsync_ShouldReturnProductViewModelList()
        {
            // Arrange
            var products = new List<Product>
            {
                new Product { Id = 1, Name = "Product A", Description = "Test A", Price = 10 },
                new Product { Id = 2, Name = "Product B", Description = "Test B", Price = 20 }
            };
            _productRepositoryMock.Setup(repo => repo.GetAllAsync()).ReturnsAsync(products);

            // Act
            var result = await _productService.GetAllProductsAsync();

            // Assert
            Assert.Equal(2, result.Count());
            Assert.Equal("Product A", result.First().Name);
        }

        [Fact]
        public async Task GetProductByIdAsync_ShouldReturnProductViewModel()
        {
            // Arrange
            var product = new Product { Id = 1, Name = "Test Product", Description = "Test Desc", Price = 50 };
            _productRepositoryMock.Setup(repo => repo.GetByIdAsync(1)).ReturnsAsync(product);

            // Act
            var result = await _productService.GetProductByIdAsync(1);

            // Assert
            Assert.Equal("Test Product", result.Name);
        }
    }
}