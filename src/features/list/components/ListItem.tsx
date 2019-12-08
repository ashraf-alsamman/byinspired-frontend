import * as React from 'react';

interface Props {
  title: string;
  onRemoveClick: () => void;
}

function ListItem({ title, onRemoveClick }: Props) {
  return (
   <React.Fragment>
       {title}
      <button type="button" className="btn btn-danger" onClick={onRemoveClick}>Delete</button>
</React.Fragment>
   );
}

export default ListItem;
