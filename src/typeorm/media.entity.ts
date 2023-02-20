import { Entity, Column, PrimaryGeneratedColumn, ManyToOne} from 'typeorm';
import { Posts } from './post_entities';

@Entity()
export class Media {
    @PrimaryGeneratedColumn({
        name:'media_id'
    })
    id: number;

    @Column()
    post_id: number;

    @Column()
    file_path: string; 

    @Column()
    file_name: string;

    @ManyToOne(() => Posts, (post) => post.post_id)
    post_: Posts

    
}
const entities = {Media}
export default entities;