import { Categories } from "src/typeorm/categories.entities";
import { Media } from "src/typeorm/media.entity";
import { Posts } from "src/typeorm/post_entities";
import { Comments } from "src/typeorm/comments.entities";
import { Users } from "src/typeorm/user.entities";
import { DataSource, DataSourceOptions } from "typeorm";


export const dataSourceOption: DataSourceOptions = {
      
    type:'mysql',
    host: 'localhost',
    username: 'root',
    port: 3306,
    password:'',
    database: 'blog2',
    entities:[Users,Comments,Posts,Media,Categories],
    migrations:['dist/db/migrations/*.js'],   
}

const dataSource = new DataSource(dataSourceOption);

export default dataSource;