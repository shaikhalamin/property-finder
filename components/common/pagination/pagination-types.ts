export type HandlePaginationProps = {
    page?:number
    perPage?:number
    order?: {
      name: string,
      by: string,
    }
  }