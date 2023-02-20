import { Entity , PrimaryGeneratedColumn, Column, OneToMany, ManyToOne} from "typeorm";
import { Posts } from "./post_entities";

@Entity()
  export class Users  {
    @PrimaryGeneratedColumn({ 
        name:'user_id',
    })
    id: number;
   @Column( ) 
   username:string
   @Column()
   email:string;
   @Column()
   password:string;

   @OneToMany(type=> Posts,  posts=>posts.user_id)
   post:Posts[];
  user_id: any;
} 

const entities = {Users}
export default entities;