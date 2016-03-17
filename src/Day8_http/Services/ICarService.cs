using System.Collections.Generic;
using Day8_http.Models;

namespace Day8_http.Services
{
    public interface ICarService
    {
        Car FindCar(int id);
        IEnumerable<Car> ListCars();
        IEnumerable<CarMake> ListMakes();
    }
}
