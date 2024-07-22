class Car {
    constructor(brand, model, year, mileage) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.mileage = mileage;
    }

    increaseYear() {
        this.year++;
    }

    increaseMileage(kilometers) {
        this.mileage += kilometers;
    }

    getAge(currentYear) {
        return currentYear - this.year;
    }

    getDescription() {
        return `${this.brand} ${this.model}, ${this.year}`; // Исправлено: Используйте обратные кавычки
    }
}

class Part {
    static maxCost = 0;

    constructor(name, cost, countryOfOrigin) {
        this.name = name;
        this.cost = cost;
        this.countryOfOrigin = countryOfOrigin;
        if (cost > Part.maxCost) {
            Part.maxCost = cost;
        }
    }

    increaseCost(percentage) {
        this.cost += this.cost * (percentage / 100);
        if (this.cost > Part.maxCost) {
            Part.maxCost = this.cost;
        }
    }

    getInfo() {
        return `${this.name}: ${this.cost} руб., Страна производства: ${this.countryOfOrigin}`; // Исправлено: Используйте обратные кавычки
    }

    static getMaxCost() {
        return Part.maxCost;
    }

    static filterByCost(parts, minCost) {
        return parts.filter(part => part.cost > minCost);
    }
}

class CountryOfOrigin {
    constructor(name, countryCode) {
        this.name = name;
        this.countryCode = countryCode;
    }

    changeCountryCode(newCode) {
        this.countryCode = newCode;
    }

    getInfo() {
        return `${this.name} (${this.countryCode})`; // Исправлено: Используйте обратные кавычки
    }
}

// Примеры использования:

// Автомобили
const car1 = new Car('Toyota', 'Camry', 2015, 50000);
car1.increaseYear();
car1.increaseMileage(1000);
console.log(car1.getDescription()); // Toyota Camry, 2016
console.log(car1.getAge(2024)); // 9

// Запчасти
const part1 = new Part('Тормозные колодки', 3000, 'Япония');
const part2 = new Part('Аккумулятор', 7000, 'Германия');
part1.increaseCost(10);
console.log(part1.getInfo()); // Тормозные колодки: 3300 руб., Страна производства: Япония
console.log(Part.getMaxCost()); // 7000
console.log(Part.filterByCost([part1, part2], 5000)); // [Part {name: 'Аккумулятор', cost: 7000, countryOfOrigin: 'Германия'}]

// Страны производства
const country1 = new CountryOfOrigin('Япония', 'JP');
country1.changeCountryCode('JPN');
console.log(country1.getInfo()); // Япония (JPN)
