import { useState, useEffect } from "react";

const TagStat = ({tag}) => {
  const [count, setCount] = useState(0);

  //TODO Update tag count every 2 seconds
  
  
  return (
    <div>
      <p data-testid="tag-stat">{`${tag}: ${count}`}</p>
    </div>
  );
};

export default TagStat;
