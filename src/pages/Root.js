import React from 'react';
import { getGraph } from 'generatorGraph/getGraph';
import { employesDyspo } from 'cms/employesDyspo';

const Root = () => {
  const graph = getGraph();

  console.log(graph);

  const list = [];
  employesDyspo.forEach((employee) => {
    const { name, numberOfDyspo, numberOfShifts } = employee;
    list.push([
      name,
      numberOfShifts,
      numberOfDyspo,
      numberOfDyspo === 0 ? '-' : numberOfShifts / numberOfDyspo,
    ]);
  });
  list.sort((a, b) => a[3] - b[3]);

  console.log('[name, numberOfDyspo, numberOfShifts, percent]');
  console.log(list);

  return (
    <>
      <h2>siema</h2>
    </>
  );
};

export default Root;
