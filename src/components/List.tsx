import React from "react";

type ListProps<T> = {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  children?: React.ReactNode;
};

export default function List<T>(props: ListProps<T>) {
  return <div>{props.items.map(props.renderItem)}</div>;
}
