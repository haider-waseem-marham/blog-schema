import { IsNotEmpty } from "class-validator";

export class UpdateCommentDto {
    
    @IsNotEmpty()
    post_id: number;
    
    @IsNotEmpty()
    user_id: number;
    
    @IsNotEmpty()
    content: string;

}
   