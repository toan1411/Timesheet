import { PassportStrategy } from "@nestjs/passport";
import { Repository } from "typeorm";
import { User } from "../../user/entities/user.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { ExtractJwt, Strategy } from "passport-jwt";
import { Inject, Injectable } from "@nestjs/common";
import { IPayload } from "../dto/payload.dto";
import { ConfigService } from "@nestjs/config";


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
        @Inject(ConfigService)
        private readonly configService: ConfigService,
        @InjectRepository(User)
        private readonly userRespository: Repository<User>,
    ) {
        super(
            {
                jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
                jgnoreExpiration: false,
                secretOrKey: configService.get('AUTH_SECRET')
            }
        );
    }

    async validate(payload: IPayload) {
        return await this.userRespository.findOne({ where: { id: payload.sub } })
    }
}