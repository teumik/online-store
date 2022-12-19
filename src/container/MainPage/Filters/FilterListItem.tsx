interface filterItemProps {
  title: string;
}

function FilterListItem(props: filterItemProps) {
  const { title } = props;

  return <FilterListItem title={title} />;
}

export default FilterListItem;
