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
exports.RentController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guards_1 = require("../auth/jwt-auth.guards");
const create_rent_dto_1 = require("./dto/create-rent.dto");
const rent_service_1 = require("./rent.service");
const swagger_1 = require("@nestjs/swagger");
let RentController = class RentController {
    constructor(rentService) {
        this.rentService = rentService;
    }
    create(rentDto) {
        return this.rentService.create(rentDto);
    }
    getAllRents() {
        return this.rentService.findAll();
    }
    removeRent(id) {
        return this.rentService.remove(id);
    }
    getAll(id) {
        return this.rentService.findAllActive(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(jwt_auth_guards_1.JwtAuthGuards),
    (0, swagger_1.ApiOperation)({ summary: 'Successfully create rent' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Successfully create rent',
        type: String,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_rent_dto_1.CreateRentDto]),
    __metadata("design:returntype", void 0)
], RentController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(jwt_auth_guards_1.JwtAuthGuards),
    (0, swagger_1.ApiOperation)({ summary: 'Successfully get rent by id' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Successfully create rent by id',
        type: String,
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RentController.prototype, "getAllRents", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guards_1.JwtAuthGuards),
    (0, swagger_1.ApiOperation)({ summary: 'Successfully delete rent by id' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Successfully delete rent by id',
        type: String,
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], RentController.prototype, "removeRent", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guards_1.JwtAuthGuards),
    (0, swagger_1.ApiOperation)({ summary: 'Successfully get rent by id' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Successfully create rent by id',
        type: String,
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], RentController.prototype, "getAll", null);
RentController = __decorate([
    (0, swagger_1.ApiTags)('Rent'),
    (0, common_1.Controller)('rent'),
    __metadata("design:paramtypes", [rent_service_1.RentService])
], RentController);
exports.RentController = RentController;
//# sourceMappingURL=rent.controller.js.map