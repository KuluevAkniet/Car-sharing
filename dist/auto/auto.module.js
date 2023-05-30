"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const auth_module_1 = require("../auth/auth.module");
const rent_entity_1 = require("../rent/rent.entity");
const auto_controller_1 = require("./auto.controller");
const auto_entity_1 = require("./auto.entity");
const auto_service_1 = require("./auto.service");
let AutoModule = class AutoModule {
};
AutoModule = __decorate([
    (0, common_1.Module)({
        controllers: [auto_controller_1.AutoController, auto_controller_1.AutoStatController],
        providers: [auto_service_1.AutoService],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([auto_entity_1.Auto, rent_entity_1.Rent]), auth_module_1.AuthModule
        ],
        exports: [typeorm_1.TypeOrmModule]
    })
], AutoModule);
exports.AutoModule = AutoModule;
//# sourceMappingURL=auto.module.js.map