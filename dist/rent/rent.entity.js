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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rent = void 0;
const auto_entity_1 = require("../auto/auto.entity");
const class_transformer_1 = require("class-transformer");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../users/user.entity");
let Rent = class Rent {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Rent.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => auto_entity_1.Auto, (autos) => autos.rent),
    (0, typeorm_1.JoinColumn)({ name: 'autoId' }),
    __metadata("design:type", auto_entity_1.Auto)
], Rent.prototype, "autos", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Rent.prototype, "autoId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Rent.prototype, "tariff", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Date),
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", Date)
], Rent.prototype, "startDay", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Date),
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", Date)
], Rent.prototype, "endDay", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Rent.prototype, "cost", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Rent.prototype, "distance", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (users) => users.id),
    (0, typeorm_1.JoinColumn)({ name: 'userId' }),
    __metadata("design:type", user_entity_1.User)
], Rent.prototype, "users", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Rent.prototype, "userId", void 0);
Rent = __decorate([
    (0, typeorm_1.Entity)()
], Rent);
exports.Rent = Rent;
//# sourceMappingURL=rent.entity.js.map