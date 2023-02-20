import { Entity , PrimaryGeneratedColumn, OneToMany,Column, ManyToOne} from "typeorm";
import { Categories } from "./categories.entities";
import { Comments } from "./comments.entities";
import { Users } from "./user.entities";
@Entity()
  export class Posts{
   
    @PrimaryGeneratedColumn({ 
        name: 'post_id',
    })
    id:number;
    @Column() 
    user_id: number;
   @Column() 
   category_id: number;
   @Column()
   title: string; 
   @Column()
   content: string;
   @Column()
   status: string;
   
   @ManyToOne(() => Users, (user) => user.user_id)
    user_: Users
    
   @ManyToOne(() => Categories, (category) => category.category_id)
    category_: Categories
    
   @OneToMany(type => Comments,  comments => comments.post_id)
   comment:Comments[];
    post_id: any;
}
const entities = {Posts}
export default entities;
 