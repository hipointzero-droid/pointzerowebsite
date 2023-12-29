import React from "react";

const LeftSide = ({ techname, select, index, changeSelected }) => {
  return select === true ? (
    <div className='Home_Technologies_Datas_Left_Paragraph'>{techname}</div>
  ) : (
    <p onClick={() => changeSelected(index)}>{techname}</p>
  );
};

export default LeftSide;
