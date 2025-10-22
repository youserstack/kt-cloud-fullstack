// lodash 라이브러리를 가져옵니다. 숫자 범위를 생성하는 데 사용됩니다.
import _ from "lodash";

// 한 번에 보여줄 페이지 번호의 개수입니다. (예: 1 2 3 4 5 6 7 8 9 10)
const PAGE_LIST_SIZE = 10;

// 페이지네이션 정보를 계산하는 함수입니다.
export function pagination({ totalCount, page, perPage = 10 }) {
  const PER_PAGE = perPage;
  // 전체 페이지 수를 계산합니다.
  const totalPage = Math.ceil(totalCount / PER_PAGE);

  // 현재 페이지가 속한 페이지 그룹을 계산합니다.
  let quotient = parseInt(page / PAGE_LIST_SIZE);
  if (page % PAGE_LIST_SIZE === 0) {
    quotient -= 1;
  }

  // 페이지 그룹의 시작 페이지와 끝 페이지를 계산합니다.
  let startPage = quotient * PAGE_LIST_SIZE + 1;
  let endPage =
    startPage + PAGE_LIST_SIZE - 1 < totalPage
      ? startPage + PAGE_LIST_SIZE - 1
      : totalPage;

  // 현재 페이지가 첫 페이지인지, 마지막 페이지인지 확인합니다.
  const isFirstPage = page === 1;
  const isLastPage = page === totalPage;

  // 이전 페이지 그룹, 다음 페이지 그룹으로 이동할 수 있는지 확인합니다.
  const hasPrev = page > 1;
  const hasNext = page < totalPage;

  // 이전 페이지와 다음 페이지 번호를 계산합니다.
  const prevPage = page - 1;
  const nextPage = page + 1;

  // 계산된 페이지네이션 정보를 객체로 묶어 반환합니다.
  return {
    // 화면에 표시될 페이지 번호 목록입니다. (예: [1, 2, ..., 10])
    pageList: _.range(startPage, endPage + 1),
    hasPrev,
    hasNext,
    prevPage,
    nextPage,
    lastPage: totalPage,
    isFirstPage,
    isLastPage,
    startPage,
    endPage,
  };
}
