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
exports.AutoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const rent_entity_1 = require("../rent/rent.entity");
const typeorm_2 = require("typeorm");
const auto_entity_1 = require("./auto.entity");
let AutoService = class AutoService {
    constructor(autoRepository, rentRepository) {
        this.autoRepository = autoRepository;
        this.rentRepository = rentRepository;
    }
    async create(dto) {
        return this.autoRepository.save(dto);
    }
    async findAll() {
        const auto = await this.autoRepository.find();
        const rent = await this.rentRepository.find();
        let stat = 0;
        for (let key of rent) {
            stat += key.distance;
        }
        console.log(stat);
        return auto;
    }
    async findOne(id) {
        const auto = await this.autoRepository.findOneBy({ id });
        return auto;
    }
    async update(id, dto) {
        const loadAuto = await this.autoRepository.findOneBy({ id });
        Object.assign(loadAuto, dto);
        return await this.autoRepository.save(loadAuto);
    }
    async remove(id) {
        await this.autoRepository.delete({ id });
    }
    async findOneStat(id) {
        const rent = await this.rentRepository.find({
            where: {
                autoId: id
            }
        });
        let stat = 0;
        for (let key of rent) {
            stat += key.distance;
        }
        return {
            autoId: id,
            stat: stat
        };
    }
    async findAllStat() {
        const rent = await this.rentRepository.find();
        let stat = 0;
        for (let key of rent) {
            stat += key.distance;
        }
        return {
            stat: stat
        };
    }
};
AutoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(auto_entity_1.Auto)),
    __param(1, (0, typeorm_1.InjectRepository)(rent_entity_1.Rent)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], AutoService);
exports.AutoService = AutoService;
//# sourceMappingURL=auto.service.js.map