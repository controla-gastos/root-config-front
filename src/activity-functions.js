export function navbar(location) {
  return true;
};

export function income(location) {
  return location.pathname == '/' || 
    location.pathname == '/income/income-edit';;
};

export function transactions(location) {
  return location.pathname == '/' || 
    location.pathname == '/transactions/extract' ||
    location.pathname == '/transactions/add';
};
