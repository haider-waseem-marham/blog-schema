import { Entity , PrimaryGeneratedColumn, Column} from "typeorm";
@Entity()
export class Categories  {
    @PrimaryGeneratedColumn({ 
        name:'category_id',
    })
    id: number;
   @Column( ) 
   name: string;
   @Column()
   description:string;
  category_id: any;
  
} 

const entities = {Categories}
export default entities;