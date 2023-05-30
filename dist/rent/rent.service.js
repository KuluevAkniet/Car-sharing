"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RentService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const enum_1 = require("./enum/enum");
const rent_entity_1 = require("./rent.entity");
let RentService = class RentService {
    constructor(rentRepository) {
        this.rentRepository = rentRepository;
    }
    async create(dto) {
        const allCar = await this.rentRepository.find({
            where: {
                autoId: dto.autoId
            }
        });
        if (dto.tariff > 3 || dto.tariff < 0) {
            throw console.log('incorrect value of tariff');
        }
        if (this.rentCondition(allCar, dto.startDay)) {
            const days = this.checkDate(dto.startDay, dto.endDay);
            if (days <= 30 && days > 1) {
                this.rentCost(days, dto);
                return await this.rentRepository.save(dto);
            }
            else {
                throw console.error('incorrect value');
            }
        }
        else {
            throw console.error('condition failure');
        }
    }
    async findAll() {
        const rent = await this.rentRepository.find();
        return rent;
    }
    async findAllActive(id) {
        const today = new Date;
        const allCar = await this.rentRepository.find({
            where: {
                autoId: id,
            },
            order: {
                startDay: "ASC"
            }
        });
        const rent = this.activeRent(allCar, today);
        return rent;
    }
    async remove(id) {
        await this.rentRepository.delete({ id });
    }
    checkDate(startDay, endDay) {
        const date1 = new Date(startDay);
        const date2 = new Date(endDay);
        const data = date2.getTime() - date1.getTime();
        const weekStart = date1.getDay();
        const weekEnd = date1.getDay();
        if (weekEnd < 5 && weekStart < 5) {
            const days = Math.floor(data / 1000 / 60 / 60 / 24);
            return days;
        }
        else {
            throw console.error('Today is day off');
        }
    }
    rentCost(days, dto) {
        const tariff = enum_1.tariffs[dto.tariff - 1];
        dto.distance = days * tariff.distance;
        dto.cost = days * tariff.cost;
        if (days >= 3 && days <= 5) {
            dto.cost = Math.floor(dto.cost - ((dto.cost / 100) * 5));
        }
        if (days >= 6 && days <= 14) {
            dto.cost = Math.floor(dto.cost - ((dto.cost / 100) * 10));
        }
        if (days >= 15 && days <= 30) {
            dto.cost = Math.floor(dto.cost - ((dto.cost / 100) * 5));
        }
    }
    rentCondition(array, day) {
        for (let key of array) {
            if (Math.abs(this.checkDate(key.startDay, day)) <= 3) {
                return false;
            }
        }
        return true;
    }
    activeRent(array, date) {
        const rent = [];
        for (let key of array) {
            const dateStart = new Date(key.startDay);
            const dateEnd = new Date(key.endDay);
            if (dateStart <= date && dateEnd > date) {
                rent.push(key);
            }
        }
        return rent;
    }
};
RentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(rent_entity_1.Rent)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], RentService);
exports.RentService = RentService;
//# sourceMappingURL=rent.service.js.map