import { useRouter } from "next/router";
import { Pagination } from "@material-ui/lab";
import React, { useCallback } from "react";

const DynamicPagination = ( totalCount: number ) => {
  const PER_PAGE = 2;
  const router = useRouter();

  const pageNumber = router.query.id ? Number.parseInt(String(router.query.id), 10) : 1;

  const handleChangePage = useCallback(
    (_, page) => {
      void router.push(`/blog/page/${page}`);
    },
    [router]
  );

  return (
    <div className="flex justify-center">
      <Pagination
        count={Math.ceil(totalCount / PER_PAGE)}
        variant="outlined"
        shape="rounded"
        color="secondary"
        page={pageNumber}
        onChange={handleChangePage}
      />
    </div>
  );
};

export default DynamicPagination;
