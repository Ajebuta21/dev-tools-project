import React from "react";
import { globalStyles } from "../../global/globalStyles";
import ComponentsContainer from "../../components/others/ComponentsContainer";
import { NumberedPaginationCode } from "../../components/paginationComponents/numberedPagination/NumberedPaginationCode";
import NumberedPagination from "../../components/paginationComponents/numberedPagination/NumberedPagination";
import EllipsisPagination from "../../components/paginationComponents/ellipsisPagination/EllipsisPagination";
import { EllipsisPaginationCode } from "../../components/paginationComponents/ellipsisPagination/EllipsisPaginationCode";

const PaginationsPage = () => {
  return (
    <div className={globalStyles.container2}>
      <h1 className={globalStyles.header}>Pagination components</h1>
      <div className="w-full flex flex-col gap-10">
        <ComponentsContainer
          title="Numbered pagination"
          code={NumberedPaginationCode}
          component={<NumberedPagination totalPages={10} />}
        />
        <ComponentsContainer
          title="Ellipsis pagination"
          code={EllipsisPaginationCode}
          component={<EllipsisPagination totalPages={10} />}
        />
      </div>
    </div>
  );
};

export default PaginationsPage;
