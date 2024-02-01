import { BaseEntity } from 'src/common/entyties/base.entity';
import { Entity, Column } from 'typeorm';

@Entity({ name: 'users' })
export class UsersEntity extends BaseEntity {
  @Column()
  email: string;

  @Column()
  password: string;
}
