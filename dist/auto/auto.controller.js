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
exports.AutoStatController = exports.AutoController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guards_1 = require("../auth/jwt-auth.guards");
const auto_service_1 = require("./auto.service");
const change_auto_dto_1 = require("./dto/change-auto.dto");
const create_auto_dto_1 = require("./dto/create-auto.dto");
const swagger_1 = require("@nestjs/swagger");
let AutoController = class AutoController {
    constructor(autoService) {
        this.autoService = autoService;
    }
    create(autoDto) {
        return this.autoService.create(autoDto);
    }
    getAll() {
        return this.autoService.findAll();
    }
    getOne(id) {
        return this.autoService.findOne(id);
    }
    updateOne(id, autoDto) {
        return this.autoService.update(id, autoDto);
    }
    removeOne(id) {
        return this.autoService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(jwt_auth_guards_1.JwtAuthGuards),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_auto_dto_1.CreateAutoDto]),
    __metadata("design:returntype", void 0)
], AutoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(jwt_auth_guards_1.JwtAuthGuards),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AutoController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guards_1.JwtAuthGuards),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AutoController.prototype, "getOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guards_1.JwtAuthGuards),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, change_auto_dto_1.ChangeAutoDto]),
    __metadata("design:returntype", void 0)
], AutoController.prototype, "updateOne", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guards_1.JwtAuthGuards),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AutoController.prototype, "removeOne", null);
AutoController = __decorate([
    (0, swagger_1.ApiTags)('Auto'),
    (0, common_1.Controller)('auto'),
    __metadata("design:paramtypes", [auto_service_1.AutoService])
], AutoController);
exports.AutoController = AutoController;
let AutoStatController = class AutoStatController {
    constructor(autoService) {
        this.autoService = autoService;
    }
    getAllCar() {
        return this.autoService.findAllStat();
    }
    getOne(id) {
        return this.autoService.findOneStat(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(jwt_auth_guards_1.JwtAuthGuards),
    (0, swagger_1.ApiOperation)({ summary: 'get car' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Successfully get car',
        type: String,
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AutoStatController.prototype, "getAllCar", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guards_1.JwtAuthGuards),
    (0, swagger_1.ApiOperation)({ summary: 'get car by id' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Successfully get car by id',
        type: String,
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AutoStatController.prototype, "getOne", null);
AutoStatController = __decorate([
    (0, swagger_1.ApiTags)('Statistic'),
    (0, common_1.Controller)('statistic'),
    __metadata("design:paramtypes", [auto_service_1.AutoService])
], AutoStatController);
exports.AutoStatController = AutoStatController;
//# sourceMappingURL=auto.controller.js.map