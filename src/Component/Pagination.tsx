import { queryparamsType } from '../Type/PaginationType';

interface paginationProps {
  paginationInfo:queryparamsType
  handlePageClick:(pageNumber : number) => void
}

const Pagination = ({paginationInfo, handlePageClick} :paginationProps) => {
  return (
    <div className="flex gr justify-end mt-4">
      <p className="text-sm text-gray-500">
        Menampilkan 1 sampai {paginationInfo.PageSize} dari {paginationInfo.TotalCount} data
      </p>
      <div className="ml-4 w-[60%] md:w-fit space-x-3">
        <button
          className='cursor-pointer bg-blue-500 btn-xs rounded-md text-white'
          disabled={paginationInfo.PageNumber === 1 || paginationInfo.PageNumber === undefined}
          onClick={() => handlePageClick((paginationInfo.PageNumber ?? 1) - 1)}
        >
          Previous
        </button>
        {/* Page numbers */}
        {Array.from({ length: paginationInfo.TotalPages ?? 1 }, (_, i) => i + 1).map(page => (
          <button
            key={page}
            onClick={() => handlePageClick(page)}
            disabled={page === paginationInfo.PageNumber}
          >
            {paginationInfo.PageNumber}
          </button>
        ))}
        {/* Next page button */}
        <button
          className='cursor-pointer bg-blue-500 btn-xs rounded-md text-white'
          disabled={!paginationInfo.HasNext}
          onClick={() => handlePageClick((paginationInfo.PageNumber ?? 1) + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
