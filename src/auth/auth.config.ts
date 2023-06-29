import { JwtModuleAsyncOptions } from "@nestjs/jwt";

export const jwtConfig : JwtModuleAsyncOptions = {
    useFactory: ()=>{
        return {
            secret: process.env.AUTH_SECRET,
            signOptions: {
                expiresIn: process.env.EXPIRES_IN
            }
        }
    }
}

