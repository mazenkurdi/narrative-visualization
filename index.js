(function () {
  "use strict";

  const data = [
    {
      Make: "Acura",
      Fuel: "Gasoline",
      EngineCylinders: 4,
      AverageHighwayMPG: 35,
      AverageCityMPG: 25,
    },
    {
      Make: "Acura",
      Fuel: "Gasoline",
      EngineCylinders: 6,
      AverageHighwayMPG: 28,
      AverageCityMPG: 21,
    },
    {
      Make: "Alfa Romeo",
      Fuel: "Gasoline",
      EngineCylinders: 4,
      AverageHighwayMPG: 33,
      AverageCityMPG: 24,
    },
    {
      Make: "Alfa Romeo",
      Fuel: "Gasoline",
      EngineCylinders: 6,
      AverageHighwayMPG: 24,
      AverageCityMPG: 17,
    },
    {
      Make: "Aston Martin",
      Fuel: "Gasoline",
      EngineCylinders: 12,
      AverageHighwayMPG: 19,
      AverageCityMPG: 12,
    },
    {
      Make: "Audi",
      Fuel: "Gasoline",
      EngineCylinders: 4,
      AverageHighwayMPG: 30,
      AverageCityMPG: 23,
    },
    {
      Make: "Audi",
      Fuel: "Gasoline",
      EngineCylinders: 6,
      AverageHighwayMPG: 27,
      AverageCityMPG: 19,
    },
    {
      Make: "Audi",
      Fuel: "Gasoline",
      EngineCylinders: 8,
      AverageHighwayMPG: 26,
      AverageCityMPG: 17,
    },
    {
      Make: "Audi",
      Fuel: "Gasoline",
      EngineCylinders: 10,
      AverageHighwayMPG: 22,
      AverageCityMPG: 14,
    },
    {
      Make: "Audi",
      Fuel: "Gasoline",
      EngineCylinders: 4,
      AverageHighwayMPG: 32,
      AverageCityMPG: 24,
    },
    {
      Make: "Bentley",
      Fuel: "Gasoline",
      EngineCylinders: 8,
      AverageHighwayMPG: 22,
      AverageCityMPG: 13,
    },
    {
      Make: "Bentley",
      Fuel: "Gasoline",
      EngineCylinders: 12,
      AverageHighwayMPG: 20,
      AverageCityMPG: 12,
    },
    {
      Make: "BMW",
      Fuel: "Diesel",
      EngineCylinders: 4,
      AverageHighwayMPG: 41,
      AverageCityMPG: 30,
    },
    {
      Make: "BMW",
      Fuel: "Diesel",
      EngineCylinders: 6,
      AverageHighwayMPG: 29,
      AverageCityMPG: 23,
    },
    {
      Make: "BMW",
      Fuel: "Electricity",
      EngineCylinders: 0,
      AverageHighwayMPG: 109,
      AverageCityMPG: 133,
    },
    {
      Make: "BMW",
      Fuel: "Gasoline",
      EngineCylinders: 2,
      AverageHighwayMPG: 33,
      AverageCityMPG: 36,
    },
    {
      Make: "BMW",
      Fuel: "Gasoline",
      EngineCylinders: 3,
      AverageHighwayMPG: 29,
      AverageCityMPG: 28,
    },
    {
      Make: "BMW",
      Fuel: "Gasoline",
      EngineCylinders: 4,
      AverageHighwayMPG: 32,
      AverageCityMPG: 23,
    },
    {
      Make: "BMW",
      Fuel: "Gasoline",
      EngineCylinders: 6,
      AverageHighwayMPG: 28,
      AverageCityMPG: 19,
    },
    {
      Make: "BMW",
      Fuel: "Gasoline",
      EngineCylinders: 8,
      AverageHighwayMPG: 23,
      AverageCityMPG: 15,
    },
    {
      Make: "BMW",
      Fuel: "Gasoline",
      EngineCylinders: 12,
      AverageHighwayMPG: 20,
      AverageCityMPG: 13,
    },
    {
      Make: "Buick",
      Fuel: "Gasoline",
      EngineCylinders: 4,
      AverageHighwayMPG: 27,
      AverageCityMPG: 20,
    },
    {
      Make: "Buick",
      Fuel: "Gasoline",
      EngineCylinders: 4,
      AverageHighwayMPG: 31,
      AverageCityMPG: 23,
    },
    {
      Make: "Buick",
      Fuel: "Gasoline",
      EngineCylinders: 6,
      AverageHighwayMPG: 26,
      AverageCityMPG: 18,
    },
    {
      Make: "Cadillac",
      Fuel: "Gasoline",
      EngineCylinders: 4,
      AverageHighwayMPG: 30,
      AverageCityMPG: 22,
    },
    {
      Make: "Cadillac",
      Fuel: "Gasoline",
      EngineCylinders: 6,
      AverageHighwayMPG: 25,
      AverageCityMPG: 17,
    },
    {
      Make: "Cadillac",
      Fuel: "Gasoline",
      EngineCylinders: 8,
      AverageHighwayMPG: 21,
      AverageCityMPG: 14,
    },
    {
      Make: "Cadillac",
      Fuel: "Gasoline",
      EngineCylinders: 4,
      AverageHighwayMPG: 32,
      AverageCityMPG: 22,
    },
    {
      Make: "Cadillac",
      Fuel: "Gasoline",
      EngineCylinders: 6,
      AverageHighwayMPG: 26,
      AverageCityMPG: 18,
    },
    {
      Make: "Cadillac",
      Fuel: "Gasoline",
      EngineCylinders: 8,
      AverageHighwayMPG: 21,
      AverageCityMPG: 15,
    },
    {
      Make: "Chevrolet",
      Fuel: "Diesel",
      EngineCylinders: 4,
      AverageHighwayMPG: 29,
      AverageCityMPG: 21,
    },
    {
      Make: "Chevrolet",
      Fuel: "Electricity",
      EngineCylinders: 0,
      AverageHighwayMPG: 110,
      AverageCityMPG: 128,
    },
    {
      Make: "Chevrolet",
      Fuel: "Gasoline",
      EngineCylinders: 4,
      AverageHighwayMPG: 31,
      AverageCityMPG: 21,
    },
    {
      Make: "Chevrolet",
      Fuel: "Gasoline",
      EngineCylinders: 8,
      AverageHighwayMPG: 23,
      AverageCityMPG: 15,
    },
    {
      Make: "Chevrolet",
      Fuel: "Gasoline",
      EngineCylinders: 4,
      AverageHighwayMPG: 34,
      AverageCityMPG: 27,
    },
    {
      Make: "Chevrolet",
      Fuel: "Gasoline",
      EngineCylinders: 6,
      AverageHighwayMPG: 24,
      AverageCityMPG: 17,
    },
    {
      Make: "Chevrolet",
      Fuel: "Gasoline",
      EngineCylinders: 8,
      AverageHighwayMPG: 21,
      AverageCityMPG: 15,
    },
    {
      Make: "Chrysler",
      Fuel: "Gasoline",
      EngineCylinders: 8,
      AverageHighwayMPG: 25,
      AverageCityMPG: 16,
    },
    {
      Make: "Chrysler",
      Fuel: "Gasoline",
      EngineCylinders: 4,
      AverageHighwayMPG: 36,
      AverageCityMPG: 23,
    },
    {
      Make: "Chrysler",
      Fuel: "Gasoline",
      EngineCylinders: 6,
      AverageHighwayMPG: 29,
      AverageCityMPG: 20,
    },
    {
      Make: "Dodge",
      Fuel: "Gasoline",
      EngineCylinders: 8,
      AverageHighwayMPG: 24,
      AverageCityMPG: 15,
    },
    {
      Make: "Dodge",
      Fuel: "Gasoline",
      EngineCylinders: 8,
      AverageHighwayMPG: 23,
      AverageCityMPG: 14,
    },
    {
      Make: "Dodge",
      Fuel: "Gasoline",
      EngineCylinders: 10,
      AverageHighwayMPG: 19,
      AverageCityMPG: 12,
    },
    {
      Make: "Dodge",
      Fuel: "Gasoline",
      EngineCylinders: 4,
      AverageHighwayMPG: 25,
      AverageCityMPG: 19,
    },
    {
      Make: "Dodge",
      Fuel: "Gasoline",
      EngineCylinders: 6,
      AverageHighwayMPG: 27,
      AverageCityMPG: 18,
    },
    {
      Make: "Ferrari",
      Fuel: "Gasoline",
      EngineCylinders: 8,
      AverageHighwayMPG: 22,
      AverageCityMPG: 16,
    },
    {
      Make: "Ferrari",
      Fuel: "Gasoline",
      EngineCylinders: 12,
      AverageHighwayMPG: 16,
      AverageCityMPG: 12,
    },
    {
      Make: "Fiat",
      Fuel: "Electricity",
      EngineCylinders: 0,
      AverageHighwayMPG: 103,
      AverageCityMPG: 121,
    },
    {
      Make: "Fiat",
      Fuel: "Gasoline",
      EngineCylinders: 4,
      AverageHighwayMPG: 34,
      AverageCityMPG: 26,
    },
    {
      Make: "Fiat",
      Fuel: "Gasoline",
      EngineCylinders: 4,
      AverageHighwayMPG: 30,
      AverageCityMPG: 22,
    },
    {
      Make: "Ford",
      Fuel: "Electricity",
      EngineCylinders: 0,
      AverageHighwayMPG: 96,
      AverageCityMPG: 118,
    },
    {
      Make: "Ford",
      Fuel: "Gasoline",
      EngineCylinders: 4,
      AverageHighwayMPG: 25,
      AverageCityMPG: 19,
    },
    {
      Make: "Ford",
      Fuel: "Gasoline",
      EngineCylinders: 6,
      AverageHighwayMPG: 18,
      AverageCityMPG: 11,
    },
    {
      Make: "Ford",
      Fuel: "Gasoline",
      EngineCylinders: 8,
      AverageHighwayMPG: 21,
      AverageCityMPG: 14,
    },
    {
      Make: "Ford",
      Fuel: "Gasoline",
      EngineCylinders: 3,
      AverageHighwayMPG: 40,
      AverageCityMPG: 29,
    },
    {
      Make: "Ford",
      Fuel: "Gasoline",
      EngineCylinders: 4,
      AverageHighwayMPG: 31,
      AverageCityMPG: 24,
    },
    {
      Make: "Ford",
      Fuel: "Gasoline",
      EngineCylinders: 6,
      AverageHighwayMPG: 23,
      AverageCityMPG: 17,
    },
    {
      Make: "Ford",
      Fuel: "Gasoline",
      EngineCylinders: 8,
      AverageHighwayMPG: 22,
      AverageCityMPG: 15,
    },
    {
      Make: "Genesis",
      Fuel: "Gasoline",
      EngineCylinders: 6,
      AverageHighwayMPG: 24,
      AverageCityMPG: 17,
    },
    {
      Make: "Genesis",
      Fuel: "Gasoline",
      EngineCylinders: 8,
      AverageHighwayMPG: 23,
      AverageCityMPG: 15,
    },
    {
      Make: "Genesis",
      Fuel: "Gasoline",
      EngineCylinders: 6,
      AverageHighwayMPG: 27,
      AverageCityMPG: 17,
    },
    {
      Make: "GMC",
      Fuel: "Diesel",
      EngineCylinders: 4,
      AverageHighwayMPG: 29,
      AverageCityMPG: 21,
    },
    {
      Make: "GMC",
      Fuel: "Gasoline",
      EngineCylinders: 4,
      AverageHighwayMPG: 27,
      AverageCityMPG: 20,
    },
    {
      Make: "GMC",
      Fuel: "Gasoline",
      EngineCylinders: 6,
      AverageHighwayMPG: 23,
      AverageCityMPG: 17,
    },
    {
      Make: "GMC",
      Fuel: "Gasoline",
      EngineCylinders: 8,
      AverageHighwayMPG: 21,
      AverageCityMPG: 15,
    },
    {
      Make: "Honda",
      Fuel: "Gasoline",
      EngineCylinders: 4,
      AverageHighwayMPG: 38,
      AverageCityMPG: 30,
    },
    {
      Make: "Honda",
      Fuel: "Gasoline",
      EngineCylinders: 4,
      AverageHighwayMPG: 37,
      AverageCityMPG: 29,
    },
    {
      Make: "Honda",
      Fuel: "Gasoline",
      EngineCylinders: 6,
      AverageHighwayMPG: 28,
      AverageCityMPG: 19,
    },
    {
      Make: "Hyundai",
      Fuel: "Electricity",
      EngineCylinders: 0,
      AverageHighwayMPG: 122,
      AverageCityMPG: 150,
    },
    {
      Make: "Hyundai",
      Fuel: "Gasoline",
      EngineCylinders: 4,
      AverageHighwayMPG: 34,
      AverageCityMPG: 27,
    },
    {
      Make: "Hyundai",
      Fuel: "Gasoline",
      EngineCylinders: 6,
      AverageHighwayMPG: 25,
      AverageCityMPG: 18,
    },
    {
      Make: "Infiniti",
      Fuel: "Gasoline",
      EngineCylinders: 4,
      AverageHighwayMPG: 30,
      AverageCityMPG: 22,
    },
    {
      Make: "Infiniti",
      Fuel: "Gasoline",
      EngineCylinders: 6,
      AverageHighwayMPG: 27,
      AverageCityMPG: 20,
    },
    {
      Make: "Infiniti",
      Fuel: "Gasoline",
      EngineCylinders: 8,
      AverageHighwayMPG: 22,
      AverageCityMPG: 15,
    },
    {
      Make: "Infiniti",
      Fuel: "Gasoline",
      EngineCylinders: 4,
      AverageHighwayMPG: 27,
      AverageCityMPG: 25,
    },
    {
      Make: "Jaguar",
      Fuel: "Diesel",
      EngineCylinders: 4,
      AverageHighwayMPG: 39,
      AverageCityMPG: 30,
    },
    {
      Make: "Jaguar",
      Fuel: "Gasoline",
      EngineCylinders: 4,
      AverageHighwayMPG: 30,
      AverageCityMPG: 21,
    },
    {
      Make: "Jaguar",
      Fuel: "Gasoline",
      EngineCylinders: 6,
      AverageHighwayMPG: 26,
      AverageCityMPG: 18,
    },
    {
      Make: "Jaguar",
      Fuel: "Gasoline",
      EngineCylinders: 8,
      AverageHighwayMPG: 23,
      AverageCityMPG: 15,
    },
    {
      Make: "Jeep",
      Fuel: "Gasoline",
      EngineCylinders: 6,
      AverageHighwayMPG: 27,
      AverageCityMPG: 19,
    },
    {
      Make: "Jeep",
      Fuel: "Gasoline",
      EngineCylinders: 8,
      AverageHighwayMPG: 22,
      AverageCityMPG: 14,
    },
    {
      Make: "Jeep",
      Fuel: "Gasoline",
      EngineCylinders: 4,
      AverageHighwayMPG: 31,
      AverageCityMPG: 24,
    },
    {
      Make: "Jeep",
      Fuel: "Gasoline",
      EngineCylinders: 8,
      AverageHighwayMPG: 19,
      AverageCityMPG: 13,
    },
    {
      Make: "Jeep",
      Fuel: "Gasoline",
      EngineCylinders: 4,
      AverageHighwayMPG: 27,
      AverageCityMPG: 21,
    },
    {
      Make: "Jeep",
      Fuel: "Gasoline",
      EngineCylinders: 6,
      AverageHighwayMPG: 22,
      AverageCityMPG: 17,
    },
    {
      Make: "Kia",
      Fuel: "Electricity",
      EngineCylinders: 0,
      AverageHighwayMPG: 92,
      AverageCityMPG: 120,
    },
    {
      Make: "Kia",
      Fuel: "Gasoline",
      EngineCylinders: 8,
      AverageHighwayMPG: 23,
      AverageCityMPG: 15,
    },
    {
      Make: "Kia",
      Fuel: "Gasoline",
      EngineCylinders: 4,
      AverageHighwayMPG: 33,
      AverageCityMPG: 27,
    },
    {
      Make: "Kia",
      Fuel: "Gasoline",
      EngineCylinders: 6,
      AverageHighwayMPG: 25,
      AverageCityMPG: 18,
    },
    {
      Make: "Lamborghini",
      Fuel: "Gasoline",
      EngineCylinders: 10,
      AverageHighwayMPG: 21,
      AverageCityMPG: 14,
    },
    {
      Make: "Lamborghini",
      Fuel: "Gasoline",
      EngineCylinders: 12,
      AverageHighwayMPG: 17,
      AverageCityMPG: 10,
    },
    {
      Make: "Land Rover",
      Fuel: "Diesel",
      EngineCylinders: 6,
      AverageHighwayMPG: 28,
      AverageCityMPG: 22,
    },
    {
      Make: "Land Rover",
      Fuel: "Gasoline",
      EngineCylinders: 4,
      AverageHighwayMPG: 27,
      AverageCityMPG: 20,
    },
    {
      Make: "Land Rover",
      Fuel: "Gasoline",
      EngineCylinders: 6,
      AverageHighwayMPG: 23,
      AverageCityMPG: 17,
    },
    {
      Make: "Land Rover",
      Fuel: "Gasoline",
      EngineCylinders: 8,
      AverageHighwayMPG: 19,
      AverageCityMPG: 14,
    },
    {
      Make: "Lexus",
      Fuel: "Gasoline",
      EngineCylinders: 4,
      AverageHighwayMPG: 30,
      AverageCityMPG: 22,
    },
    {
      Make: "Lexus",
      Fuel: "Gasoline",
      EngineCylinders: 6,
      AverageHighwayMPG: 28,
      AverageCityMPG: 21,
    },
    {
      Make: "Lexus",
      Fuel: "Gasoline",
      EngineCylinders: 8,
      AverageHighwayMPG: 22,
      AverageCityMPG: 16,
    },
    {
      Make: "Lexus",
      Fuel: "Gasoline",
      EngineCylinders: 4,
      AverageHighwayMPG: 36,
      AverageCityMPG: 39,
    },
    {
      Make: "Lexus",
      Fuel: "Gasoline",
      EngineCylinders: 6,
      AverageHighwayMPG: 28,
      AverageCityMPG: 20,
    },
    {
      Make: "Lincoln",
      Fuel: "Gasoline",
      EngineCylinders: 4,
      AverageHighwayMPG: 29,
      AverageCityMPG: 23,
    },
    {
      Make: "Lincoln",
      Fuel: "Gasoline",
      EngineCylinders: 6,
      AverageHighwayMPG: 24,
      AverageCityMPG: 16,
    },
    {
      Make: "Lotus",
      Fuel: "Gasoline",
      EngineCylinders: 6,
      AverageHighwayMPG: 24,
      AverageCityMPG: 17,
    },
    {
      Make: "Maserati",
      Fuel: "Gasoline",
      EngineCylinders: 6,
      AverageHighwayMPG: 24,
      AverageCityMPG: 16,
    },
    {
      Make: "Maserati",
      Fuel: "Gasoline",
      EngineCylinders: 8,
      AverageHighwayMPG: 20,
      AverageCityMPG: 14,
    },
    {
      Make: "Mazda",
      Fuel: "Gasoline",
      EngineCylinders: 4,
      AverageHighwayMPG: 34,
      AverageCityMPG: 26,
    },
    {
      Make: "Mazda",
      Fuel: "Gasoline",
      EngineCylinders: 4,
      AverageHighwayMPG: 35,
      AverageCityMPG: 27,
    },
    {
      Make: "McLaren Automotive",
      Fuel: "Gasoline",
      EngineCylinders: 8,
      AverageHighwayMPG: 23,
      AverageCityMPG: 16,
    },
    {
      Make: "Mercedes-Benz",
      Fuel: "Electricity",
      EngineCylinders: 0,
      AverageHighwayMPG: 82,
      AverageCityMPG: 85,
    },
    {
      Make: "Mercedes-Benz",
      Fuel: "Gasoline",
      EngineCylinders: 4,
      AverageHighwayMPG: 30,
      AverageCityMPG: 23,
    },
    {
      Make: "Mercedes-Benz",
      Fuel: "Gasoline",
      EngineCylinders: 6,
      AverageHighwayMPG: 25,
      AverageCityMPG: 19,
    },
    {
      Make: "Mercedes-Benz",
      Fuel: "Gasoline",
      EngineCylinders: 8,
      AverageHighwayMPG: 22,
      AverageCityMPG: 16,
    },
    {
      Make: "Mercedes-Benz",
      Fuel: "Gasoline",
      EngineCylinders: 12,
      AverageHighwayMPG: 20,
      AverageCityMPG: 13,
    },
    {
      Make: "MINI",
      Fuel: "Gasoline",
      EngineCylinders: 4,
      AverageHighwayMPG: 33,
      AverageCityMPG: 24,
    },
    {
      Make: "Mitsubishi",
      Fuel: "Electricity",
      EngineCylinders: 0,
      AverageHighwayMPG: 102,
      AverageCityMPG: 121,
    },
    {
      Make: "Mitsubishi",
      Fuel: "Gasoline",
      EngineCylinders: 6,
      AverageHighwayMPG: 27,
      AverageCityMPG: 20,
    },
    {
      Make: "Mitsubishi",
      Fuel: "Gasoline",
      EngineCylinders: 3,
      AverageHighwayMPG: 42,
      AverageCityMPG: 35,
    },
    {
      Make: "Mitsubishi",
      Fuel: "Gasoline",
      EngineCylinders: 4,
      AverageHighwayMPG: 31,
      AverageCityMPG: 24,
    },
    {
      Make: "Nissan",
      Fuel: "Electricity",
      EngineCylinders: 0,
      AverageHighwayMPG: 101,
      AverageCityMPG: 124,
    },
    {
      Make: "Nissan",
      Fuel: "Gasoline",
      EngineCylinders: 4,
      AverageHighwayMPG: 31,
      AverageCityMPG: 26,
    },
    {
      Make: "Nissan",
      Fuel: "Gasoline",
      EngineCylinders: 6,
      AverageHighwayMPG: 26,
      AverageCityMPG: 18,
    },
    {
      Make: "Nissan",
      Fuel: "Gasoline",
      EngineCylinders: 4,
      AverageHighwayMPG: 33,
      AverageCityMPG: 26,
    },
    {
      Make: "Nissan",
      Fuel: "Gasoline",
      EngineCylinders: 6,
      AverageHighwayMPG: 25,
      AverageCityMPG: 18,
    },
    {
      Make: "Nissan",
      Fuel: "Gasoline",
      EngineCylinders: 8,
      AverageHighwayMPG: 20,
      AverageCityMPG: 14,
    },
    {
      Make: "Porsche",
      Fuel: "Gasoline",
      EngineCylinders: 4,
      AverageHighwayMPG: 27,
      AverageCityMPG: 21,
    },
    {
      Make: "Porsche",
      Fuel: "Gasoline",
      EngineCylinders: 6,
      AverageHighwayMPG: 26,
      AverageCityMPG: 19,
    },
    {
      Make: "Porsche",
      Fuel: "Gasoline",
      EngineCylinders: 8,
      AverageHighwayMPG: 21,
      AverageCityMPG: 14,
    },
    {
      Make: "Ram",
      Fuel: "Gasoline",
      EngineCylinders: 8,
      AverageHighwayMPG: 21,
      AverageCityMPG: 14,
    },
    {
      Make: "Ram",
      Fuel: "Gasoline",
      EngineCylinders: 4,
      AverageHighwayMPG: 28,
      AverageCityMPG: 21,
    },
    {
      Make: "Ram",
      Fuel: "Gasoline",
      EngineCylinders: 6,
      AverageHighwayMPG: 24,
      AverageCityMPG: 17,
    },
    {
      Make: "Rolls-Royce",
      Fuel: "Gasoline",
      EngineCylinders: 12,
      AverageHighwayMPG: 19,
      AverageCityMPG: 12,
    },
    {
      Make: "Roush Performance",
      Fuel: "Gasoline",
      EngineCylinders: 8,
      AverageHighwayMPG: 23,
      AverageCityMPG: 14,
    },
    {
      Make: "smart",
      Fuel: "Gasoline",
      EngineCylinders: 3,
      AverageHighwayMPG: 39,
      AverageCityMPG: 32,
    },
    {
      Make: "Subaru",
      Fuel: "Gasoline",
      EngineCylinders: 4,
      AverageHighwayMPG: 27,
      AverageCityMPG: 21,
    },
    {
      Make: "Subaru",
      Fuel: "Gasoline",
      EngineCylinders: 4,
      AverageHighwayMPG: 33,
      AverageCityMPG: 25,
    },
    {
      Make: "Subaru",
      Fuel: "Gasoline",
      EngineCylinders: 6,
      AverageHighwayMPG: 28,
      AverageCityMPG: 20,
    },
    {
      Make: "Tesla",
      Fuel: "Electricity",
      EngineCylinders: 0,
      AverageHighwayMPG: 98,
      AverageCityMPG: 92,
    },
    {
      Make: "Toyota",
      Fuel: "Gasoline",
      EngineCylinders: 4,
      AverageHighwayMPG: 30,
      AverageCityMPG: 23,
    },
    {
      Make: "Toyota",
      Fuel: "Gasoline",
      EngineCylinders: 4,
      AverageHighwayMPG: 35,
      AverageCityMPG: 32,
    },
    {
      Make: "Toyota",
      Fuel: "Gasoline",
      EngineCylinders: 6,
      AverageHighwayMPG: 25,
      AverageCityMPG: 20,
    },
    {
      Make: "Toyota",
      Fuel: "Gasoline",
      EngineCylinders: 8,
      AverageHighwayMPG: 18,
      AverageCityMPG: 13,
    },
    {
      Make: "Volkswagen",
      Fuel: "Gasoline",
      EngineCylinders: 4,
      AverageHighwayMPG: 28,
      AverageCityMPG: 21,
    },
    {
      Make: "Volkswagen",
      Fuel: "Gasoline",
      EngineCylinders: 4,
      AverageHighwayMPG: 33,
      AverageCityMPG: 24,
    },
    {
      Make: "Volkswagen",
      Fuel: "Gasoline",
      EngineCylinders: 6,
      AverageHighwayMPG: 25,
      AverageCityMPG: 18,
    },
    {
      Make: "Volvo",
      Fuel: "Gasoline",
      EngineCylinders: 4,
      AverageHighwayMPG: 29,
      AverageCityMPG: 22,
    },
    {
      Make: "Volvo",
      Fuel: "Gasoline",
      EngineCylinders: 4,
      AverageHighwayMPG: 32,
      AverageCityMPG: 23,
    },
  ];

  const companies = [...new Set(data.map((d) => d.Make))];

  function handleSlideChange() {
    const slideButton1 = document.getElementById("slide-button-1");
    const slideButton2 = document.getElementById("slide-button-2");
    const slideButton3 = document.getElementById("slide-button-3");
    const slideButton4 = document.getElementById("slide-button-4");

    function hideAllSlides() {
      for (let i = 1; i < 5; i++) {
        const slide = document.getElementById(`slide--${i}`);
        const button = document.getElementById(`slide-button-${i}`);
        slide.classList.remove("visible");
        button.classList.remove("selected");
      }
    }

    slideButton1.addEventListener("click", () => {
      hideAllSlides();
      const slideToActivate = slideButton1.dataset.slide;
      slideButton1.classList.add("selected");
      document
        .getElementById("parameter-button-city")
        .classList.remove("selected");
      document
        .getElementById("parameter-button-highway")
        .classList.add("selected");
      document
        .getElementById(`slide--${slideToActivate}`)
        .classList.add("visible");
    });

    slideButton2.addEventListener("click", () => {
      hideAllSlides();
      const slideToActivate = slideButton2.dataset.slide;
      slideButton2.classList.add("selected");
      document
        .getElementById("parameter-button-highway")
        .classList.remove("selected");
      document
        .getElementById("parameter-button-city")
        .classList.add("selected");
      document
        .getElementById(`slide--${slideToActivate}`)
        .classList.add("visible");
    });

    slideButton3.addEventListener("click", () => {
      hideAllSlides();
      const slideToActivate = slideButton3.dataset.slide;
      slideButton3.classList.add("selected");
      document
        .getElementById("parameter-button-city")
        .classList.remove("selected");
      document
        .getElementById("parameter-button-highway")
        .classList.add("selected");
      document
        .getElementById(`slide--${slideToActivate}`)
        .classList.add("visible");
    });

    slideButton4.addEventListener("click", () => {
      hideAllSlides();
      const slideToActivate = slideButton4.dataset.slide;
      slideButton4.classList.add("selected");
      document
        .getElementById("parameter-button-highway")
        .classList.remove("selected");
      document
        .getElementById("parameter-button-city")
        .classList.add("selected");
      document
        .getElementById(`slide--${slideToActivate}`)
        .classList.add("visible");
    });
  }

  function renderFuelTypeChart(highwayOrCity) {
    const fuelTypes = ["Gasoline", "Diesel", "Electricity"];
    const fuelTypeData = [];

    fuelTypes.forEach((fuelType) => {
      let averageMPGSum = 0;
      let averageMPGNumber = 0;

      data.forEach((d) => {
        if (d.Fuel === fuelType) {
          if (highwayOrCity === "highway") {
            averageMPGSum += d.AverageHighwayMPG;
          } else {
            averageMPGSum += d.AverageCityMPG;
          }

          averageMPGNumber++;
        }
      });

      fuelTypeData.push({
        fuelType,
        averageMPG: averageMPGSum / averageMPGNumber,
      });
    });

    const xAxis = d3.scaleBand().domain(fuelTypes).range([0, 600]);
    const yAxis = d3.scaleLinear().domain([0, 130]).range([500, 0]);

    const svg = d3.select(`#fuel-type-chart-${highwayOrCity}`);

    svg
      .append("g")
      .attr("transform", "translate(" + 30 + ", " + 30 + ")")
      .call(d3.axisLeft(yAxis));

    svg
      .append("g")
      .attr("transform", "translate(" + 30 + ", " + 530 + ")")
      .call(d3.axisBottom(xAxis));

    svg
      .append("g")
      .attr("transform", "translate(" + 30 + ", " + 30 + ")")
      .selectAll(".bar")
      .data(fuelTypeData)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", function (d) {
        return xAxis(d.fuelType);
      })
      .attr("y", function (d) {
        return yAxis(d.averageMPG);
      })
      .attr("width", xAxis.bandwidth())
      .attr("height", function (d) {
        return 500 - yAxis(d.averageMPG);
      });

    const electricCarCompanies = [];

    data.forEach((d) => {
      if (d.Fuel === "Electricity" && !electricCarCompanies.includes(d.Make)) {
        electricCarCompanies.push(d.Make);
      }
    });

    const highwayAnnotations = [
      {
        note: {
          label: electricCarCompanies.join(",\n"),
          title: "Companies",
          wrap: 150,
        },
        connector: {
          end: "dot",
          type: "curve",
          points: [
            [-100, 14],
            [-190, 52],
          ],
        },
        x: 450,
        y: 150,
        dy: 100,
        dx: -200,
      },
    ];

    const makeHighwayAnnotations = d3
      .annotation()
      .type(d3.annotationLabel)
      .annotations(highwayAnnotations);

    const cityAnnotations = [
      {
        note: {
          label: "We see a larger difference of 100 MPG",
          wrap: 150,
        },
        connector: {
          end: "dot",
          type: "curve",
          points: [
            [-150, 14],
            [-240, 52],
          ],
        },
        x: 420,
        y: 150,
        dy: 100,
        dx: -250,
      },
    ];

    const makeCityAnnotations = d3
      .annotation()
      .type(d3.annotationLabel)
      .annotations(cityAnnotations);

    if (highwayOrCity === "highway") {
      svg
        .append("g")
        .attr("class", "annotation-group")
        .call(makeHighwayAnnotations);
    } else {
      svg
        .append("g")
        .attr("class", "annotation-group")
        .call(makeCityAnnotations);
    }
  }

  function renderCompaniesChart(highwayOrCity) {
    let companyData = [];

    companies.forEach((company) => {
      let averageMPGSum = 0;
      let averageMPGNumber = 0;

      data.forEach((d) => {
        if (d.Make === company) {
          if (highwayOrCity === "highway") {
            averageMPGSum += d.AverageHighwayMPG;
          } else {
            averageMPGSum += d.AverageCityMPG;
          }

          averageMPGNumber++;
        }
      });

      companyData.push({
        company,
        averageMPG: averageMPGSum / averageMPGNumber,
      });
    });

    companyData = companyData.sort(function compare(a, b) {
      if (a.averageMPG < b.averageMPG) {
        return -1;
      }

      if (a.averageMPG > b.averageMPG) {
        return 1;
      }

      return 0;
    });

    companyData = companyData.slice(
      companyData.length - 10,
      companyData.length
    );

    const xAxis = d3
      .scaleBand()
      .domain(companyData.map((c) => c.company))
      .range([0, 600]);
    const yAxis = d3.scaleLinear().domain([0, 110]).range([500, 0]);

    const svg = d3.select(`#top-companies-chart-${highwayOrCity}`);

    svg
      .append("g")
      .attr("transform", "translate(" + 30 + ", " + 30 + ")")
      .call(d3.axisLeft(yAxis));

    svg
      .append("g")
      .attr("transform", "translate(" + 30 + ", " + 530 + ")")
      .call(d3.axisBottom(xAxis));

    svg
      .append("g")
      .attr("transform", "translate(" + 30 + ", " + 30 + ")")
      .selectAll(".bar")
      .data(companyData)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", function (d) {
        return xAxis(d.company);
      })
      .attr("y", function (d) {
        return yAxis(d.averageMPG);
      })
      .attr("width", xAxis.bandwidth())
      .attr("height", function (d) {
        return 500 - yAxis(d.averageMPG);
      });
  }

  renderFuelTypeChart("highway");
  renderFuelTypeChart("city");
  renderCompaniesChart("highway");
  renderCompaniesChart("city");
  handleSlideChange();
})();
