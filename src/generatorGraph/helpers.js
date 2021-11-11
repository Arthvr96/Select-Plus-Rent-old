import { heliosEmployes } from 'cms/heliosEmployes';
import { employesDyspo } from 'cms/employesDyspo';

export const getEmployeeInfo = (name) => {
  let result;
  heliosEmployes.forEach((employee) => {
    if (employee.name === name) {
      result = employee;
    }
  });
  return result;
};
export const getEmployeeDyspo = (name) => {
  let result;
  employesDyspo.forEach((employee) => {
    if (employee.name === name) {
      result = employee;
    }
  });
  return result;
};

export const getNameShift = (idexOfShift) => {
  let nameOfShift;
  switch (idexOfShift) {
    case 0:
      nameOfShift = 'bar1';
      break;
    case 1:
      nameOfShift = 'bar2';
      break;
    case 2:
      nameOfShift = 'obs1';
      break;
    case 3:
      nameOfShift = 'obs2';
      break;
    case 4:
      nameOfShift = 'coffee';
      break;
    case 5:
      nameOfShift = 'tickets';
      break;
    default:
      console.log('error');
  }
  return nameOfShift;
};
