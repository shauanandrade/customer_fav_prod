import {SetMetadata} from "@nestjs/common";
import {TOKEN} from "../constants/tokens.constants";

export const IsPublic = () => SetMetadata(TOKEN.IS_PUBLIC, true)