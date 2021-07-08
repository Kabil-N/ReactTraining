import {diff} from 'jest-diff';
import {render,screen} from '@testing-library/react'

// const {diff} = require('jest-diff');

test('sample test case',()=>{const a = {a: {b: {c: 5}}};
const b = {a: {b: {c: 6}}};

const result = diff(a, b);

// print diff
console.log(result);
})

const mockFunc = ()=>3
  
//   .mockReturnValue('default')
//   .mockImplementation(scalar => 42 + scalar)
//   .mockName('add42');

  test('rendered successfiully',()=>{
    // All calls and the name of the mock is written as a snapshot
    expect(mockFunc).toMatchSnapshot();
  })

  test('container',()=>{
    const table = document.createElement('h1')

    const { container,getByRole } = render(<div><h1>Hello</h1></div>, {
    container: document.body.appendChild(table),
    })

    // expect(container.firstChild.firstChild).toMatchInlineSnapshot('<h1>Hello</h1>');

    expect(getByRole('heading',{hidden:true})).toBeInTheDocument();

  })