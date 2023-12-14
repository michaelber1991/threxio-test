interface Identifiable {
  id: string;
}

export const getNextId = <T extends Identifiable>(items: T[]): number => {
  const maxId: number = items.reduce((max, item) => {
    const currentId = Number(item.id);
    return currentId > max ? currentId : max;
  }, 0);

  return maxId + 1;
};
