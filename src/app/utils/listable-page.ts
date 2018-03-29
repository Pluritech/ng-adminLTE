import { TableContent } from '@pluritech/ng2-responsive-table';
import { PageEvent } from '@pluritech/pagination';

export abstract class ListablePage<FilterGenericType, ListGenericType> {


  /**
   * This object is the filter to be sent to server.
   * @type {FilterGenericType}
   * @memberof ListablePage
   */
  public filter: FilterGenericType;


  /**
   * The content of the page.
   * @type {TableContent}
   * @memberof ListablePage
   */
  public data: TableContent;


  /**
   * The boolean to indicate if the list os loaded or not.
   * @type {boolean}
   * @memberof ListablePage
   */
  public loaded: boolean;


  /**
   * The list to be showed in the page.
   * @type {ListGenericType}
   * @memberof ListablePage
   */
  public list: ListGenericType;


  /**
   * This method is use to get the list from server.
   * @abstract
   * @param {*} [param]
   * @returns {Promise<void>}
   * @memberof ListablePage
   */
  public abstract getList(param?: any): Promise<void>;


  /**
   * This method is used to get the list from server with filters.
   * @abstract
   * @returns {Promise<void>}
   * @memberof ListablePage
   */
  public abstract doFilter(): Promise<void>;


  /**
   * This method is used to handle the page change when the user clicks on the paginator component.
   * @protected
   * @param {PageEvent} ev
   * @memberof ListablePage
   */
  protected handleChangePage(ev: PageEvent): void {
    const param = Object.assign(this.filter, ev);
    this.getList(param);
  }


  /**
   * This method is used to set the content of the table that will be show to the user.
   * @protected
   * @abstract
   * @memberof ListablePage
   */
  protected abstract mountTable(): void;

}
