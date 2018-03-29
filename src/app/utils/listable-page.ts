import { TableContent } from '@pluritech/ng2-responsive-table';
import { PageEvent } from '@pluritech/pagination';

export abstract class ListablePage<FilterGenericType, ListGenericType> {

  public filter: FilterGenericType;
  public data: TableContent;
  public loaded: boolean;
  public list: ListGenericType;

  public abstract getList(): Promise<void>;

  public abstract doFilter(): Promise<void>;

  protected handleChangePage(ev: PageEvent): void {
    const param = Object.assign(this.filter, ev);
    this.getList();
  }

  protected mountTable(): void {}

}
