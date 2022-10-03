import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Pagination from "react-bootstrap/Pagination";
import { HandlePaginationProps } from "./pagination-types";

interface PaginationProps {
  onChange: (paginationProps: HandlePaginationProps) => void;
  total?: number;
  perPage?: number;
}

const BasicPagination: React.FC<PaginationProps> = ({
  total = 0,
  perPage = 20,
  onChange,
}) => {
  const [active, setActive] = useState(1);
  const [itemTotal, setItemTotal] = useState(100);

  useEffect(() => {
    const paginationItem =
      total < perPage ? 1 : Number(Math.ceil(total / perPage));
    setItemTotal(paginationItem);
  }, [perPage, total]);

  let items: any = [];
  for (let number = 1; number <= itemTotal; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === active}
        onClick={() => handleChange(number)}
        className="bg-color-09a"
      >
        {number}
      </Pagination.Item>
    );
  }

  const handleChange = (page: number): void => {
    setActive(page);
    onChange({
      perPage: 200,
    });
  };

  return (
    <>
      <Pagination>
        {active > 1 && (
          <>
            <Pagination.First
              disabled={active === 1}
              onClick={() =>
                active > 2 ? handleChange(active - 2) : handleChange(1)
              }
            />
          </>
        )}
        <Pagination.Prev
          disabled={active === 1}
          onClick={() =>
            active > 1 ? handleChange(active - 1) : handleChange(1)
          }
        />
        {items}
        <Pagination.Next
          //   disabled={active === 1}
          onClick={() =>
            active > itemTotal - 1 ? handleChange(1) : handleChange(active + 1)
          }
        />
        <Pagination.Last
          disabled={active === 1}
          onClick={() =>
            active > itemTotal - 2 ? handleChange(1) : handleChange(active + 2)
          }
        />
      </Pagination>
    </>
  );
};

export default BasicPagination;
