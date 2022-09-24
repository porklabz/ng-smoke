import {Prop, SmkModel} from "../../../../ng-smoke/src/lib/filling/smk-model";
import {Max, Min, NotNull} from "../../../../ng-smoke/src/lib/filling/smk-validation";

export class User extends SmkModel {
  @Prop()
  id: number;

  @Prop()
  @NotNull()
  @Min(2)
  @Max(5)
  name: string;

  @Prop()
  nameOfUser: string;
}
