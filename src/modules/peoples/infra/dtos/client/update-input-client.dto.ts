import {ApiProperty, PartialType} from "@nestjs/swagger";
import {IsEmail, IsNotEmpty, IsStrongPassword} from "class-validator";
import {CreateInputClientDto} from "./create-input-client.dto";


export class UpdateInputClientDto extends PartialType(CreateInputClientDto) {}