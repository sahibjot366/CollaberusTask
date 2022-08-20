export const filterData = (query, data) => {
  return data.filter(item => {
    const name = item.name.toLowerCase();
    const email = item.email.toLowerCase();
    const role = item.role.toLowerCase();
    query = query.toLowerCase();
    if (name.includes(query) || email.includes(query) || role.includes(query)) {
      return true;
    }
    return false;
  });
};
