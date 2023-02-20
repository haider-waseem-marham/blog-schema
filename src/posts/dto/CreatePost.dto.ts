import { IsNotEmpty } from "class-validator";
export class CreatePostDto {
    
    @IsNotEmpty()
    user_id : number;

    @IsNotEmpty()
    category_id: number;
    
    @IsNotEmpty()
    title: string;
    
    @IsNotEmpty()
    content: string;
    
    @IsNotEmpty()
    status: string;

}
  