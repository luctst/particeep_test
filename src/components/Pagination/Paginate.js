import React from "react";
import Pagination from "rc-pagination";
import 'rc-pagination/assets/index.css';

function Paginate(props) {
  return(
    <Pagination onChange={props.changedPage}  defaultPageSize={1} total={100} pageSize={1} />
  )
}

export default Paginate