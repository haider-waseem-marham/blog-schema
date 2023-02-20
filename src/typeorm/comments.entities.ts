import { Entity , PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import { Posts } from "./post_entities";
@Entity()
export class Comments  {
    @PrimaryGeneratedColumn({ 
        name:'id',
    })
    id: number;
   @Column( ) 
   post_id: number;
   @Column()
   user_id:number;
   @Column()
   content:string;

   @ManyToOne(() => Posts, (post) => post.post_id)
   post_: Posts
} 

const entities = {Comments}
export default entities;