import { IsNotEmpty } from "class-validator";
export class UpdateMediaDto {

    @IsNotEmpty()
    post_id : number;

    @IsNotEmpty()
    file_path: string;
    
    @IsNotEmpty()
    file_name: string;
   

}
  